import { ProductProps } from '../DTOS/product-dto';
import { Either, left, right } from '../errors/either';
import { RequiredParametersError } from '../errors/required-parameters-error';
import { ProductsRepository } from '../repositories/product-repository';

type GetProductByIdResponse = ProductProps
type Response = Either<RequiredParametersError, GetProductByIdResponse>

export class GetProductById {

  constructor(

    private productRepository: ProductsRepository

  ){}

  async execute(id: string) :Promise<Response> {

    const product = await this.productRepository.getProductById(id);
    if(!product) { 
      return left(new RequiredParametersError('Produto não encontrado', 404));
    }

    return right(product);
  }

}