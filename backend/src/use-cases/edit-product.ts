import { Decimal } from '@prisma/client/runtime/library';
import { Either, left, right } from '../errors/either';
import { RequiredParametersError } from '../errors/required-parameters-error';
import { ProductsRepository } from '../repositories/product-repository';

export type EditProductRequest = {
  name: string
  description: string
  price: Decimal
}

type EditProductResponse = {
  message: string
}

type Response = Either<RequiredParametersError, EditProductResponse>

export class EditProduct {

  constructor(
    private productRepository: ProductsRepository
  ) {}

  async execute(
    id: string, {
      name,
      description,
      price
    }: EditProductRequest) :Promise<Response> {

    const product = await this.productRepository.getProductById(id);
    if(!product) {
      return left(new RequiredParametersError('Produto não encontrado', 404));
    }

    const checkPrice = Number(price);
    if(checkPrice < 2) {
      return left(new RequiredParametersError('O preço mínimo é de R$ 2,00', 422));
    }

    await this.productRepository.editProduct(id, {
      name,
      description,
      price
    });

    return right({ message: 'Produto editado com sucesso' });
  }
}