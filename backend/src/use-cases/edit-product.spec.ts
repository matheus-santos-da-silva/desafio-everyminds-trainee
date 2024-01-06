import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../repositories/in-memory-repositories/in-memory-product-repository';
import { CreateProduct } from './create-product';
import { productMock } from '../mocks/product-mock';
import { EditProduct } from './edit-product';
import { RequiredParametersError } from '../errors/required-parameters-error';

describe('Edit-Product use-case', () => {
  
  it('should be able to edit product', async () => {
    
    const productRepository = new InMemoryProductRepository();
    const createProduct = new CreateProduct(productRepository);

    await createProduct.execute(productMock); 

    const sut = new EditProduct(productRepository);
    const result = await sut.execute(
      productMock.id,
      {
        description: 'edited-description',
        name: 'edited-name',
        price: productMock.price,
      }
    );

    expect(result.value).toEqual({ message: 'Produto editado com sucesso' });
    expect(productRepository.products[0].description).toEqual('edited-description');
  });

  it('should not to be able to edit product if the id not exists', async () => {
    
    const productRepository = new InMemoryProductRepository();
    const createProduct = new CreateProduct(productRepository);

    await createProduct.execute(productMock); 

    const sut = new EditProduct(productRepository);
    const result = await sut.execute(
      'invalid-id',
      {
        description: 'edited-description',
        name: 'edited-name',
        price: productMock.price,
      }
    );

    expect(result.value).toBeInstanceOf(RequiredParametersError);
    expect(result.value.message).toContain('Produto não encontrado');
  });
});