import { Decimal } from '@prisma/client/runtime/library';
import { ProductsRepository } from '../repositories/product-repository';
import { RequiredParametersError } from '../errors/required-parameters-error';
import { Either, left, right } from '../errors/either';

export type CreateProductRequest = {
  id: string
  name: string
  code: string
  description: string
  price: Decimal
}

type CreateProductResponse = {
  message: string
}
type Response = Either<RequiredParametersError, CreateProductResponse>

export class CreateProduct {

  constructor(
    private productsRepository: ProductsRepository
  ) {}

  async execute({
    id,
    code,
    description,
    name,
    price
  }:CreateProductRequest):Promise<Response> {

    const codeExists = await this.productsRepository.checkIfCodeExists(code);
    if(codeExists) {
      return left(new RequiredParametersError('Código do produto já existe, tente novamente com outro', 400));
    }

    const checkPrice = Number(price);
    if(checkPrice < 2) {
      return left(new RequiredParametersError('O preço mínimo é de R$ 2,00', 422));
    }

    await this.productsRepository.create({
      id,
      code,
      description,
      name,
      price
    });

    return right({ message: 'Produto criado com sucesso' });
  }
}