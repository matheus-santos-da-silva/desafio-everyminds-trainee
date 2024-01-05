import { ProductProps } from '../DTOS/product-dto';
import { Either, right } from '../errors/either';
import { RequiredParametersError } from '../errors/required-parameters-error';
import { ProductsRepository } from '../repositories/product-repository';

type GetProductsResponse = ProductProps[]
type Response = Either<RequiredParametersError, GetProductsResponse>

export class GetProducts {

  constructor(
    private productRepository: ProductsRepository
  ) {}

  async execute():Promise<Response> {

    const result = await this.productRepository.getProducts();
    return right(result);
  }
    
}