import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../repositories/in-memory-repositories/in-memory-product-repository';
import { CreateProduct } from './create-product';
import { GetProducts } from './get-products';
import { productMock, productMock1 } from '../mocks/product-mock';

describe('Get-Products use-case', () => {

  it('should be able to get products', async () => {
    
    const productsRepository = new InMemoryProductRepository();
    const createProduct = new CreateProduct(productsRepository);

    await createProduct.execute(productMock);
    await createProduct.execute(productMock1);

    const sut = new GetProducts(productsRepository);
    const result = await sut.execute();

    expect(result.value).toEqual(productsRepository.products);
  });

});