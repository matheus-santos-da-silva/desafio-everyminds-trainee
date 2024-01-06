import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../repositories/in-memory-repositories/in-memory-product-repository';
import { CreateProduct } from './create-product';
import { productMock } from '../mocks/product-mock';
import { GetProductById } from './get-product-by-id';
import { RequiredParametersError } from '../errors/required-parameters-error';

describe('Get-Product-By-Id use-case', () => {

  it('should be able to get product by id', async () => {

    const productRepository = new InMemoryProductRepository();

    const createProduct = new CreateProduct(productRepository);
    await createProduct.execute(productMock);

    const sut = new GetProductById(productRepository);
    const result = await sut.execute(productMock.id);

    expect(result.value).toEqual(productRepository.products[0]);
  });

  it('should not to be able to get product by id, if the id not exists', async () => {

    const productRepository = new InMemoryProductRepository();

    const sut = new GetProductById(productRepository);
    const result = await sut.execute('invalid-id');

    expect(result.value).toBeInstanceOf(RequiredParametersError);
  });

});