import { Either, left, right } from '../errors/either';
import { RequiredParametersError } from '../errors/required-parameters-error';
import { ProductsRepository } from '../repositories/product-repository';

type DeleteProductResponse = {
  message: string
}

type Response = Either<RequiredParametersError, DeleteProductResponse>

export class DeleteProduct {

  constructor(

    private productRepository: ProductsRepository

  ) {}

  async execute(id: string): Promise<Response> {
      
    const product =  await this.productRepository.getProductById(id);
    if(!product) {
      return left(new RequiredParametersError('Produto não encontrado', 404));
    }

    await this.productRepository.deleteProduct(id);

    return right({ message: 'Produto deletado com sucesso' });
  }


}