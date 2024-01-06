import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../repositories/in-memory-repositories/in-memory-product-repository';
import { CreateProduct } from './create-product';
import { productMock } from '../mocks/product-mock';
import { DeleteProduct } from './delete-product';
import { RequiredParametersError } from '../errors/required-parameters-error';

describe('Delete-Product use-case', () => {

  it('should be able to delete product', async () => {
    
    const productRepository = new InMemoryProductRepository();

    const createProduct = new CreateProduct(productRepository);
    await createProduct.execute(productMock);

    const sut = new DeleteProduct(productRepository);
    const result = await sut.execute(productMock.id);

    expect(result.value).toEqual({ message: 'Produto deletado com sucesso' });
    expect(productRepository.products).toHaveLength(0);

  });

  it('should be able to delete product', async () => {
    
    const productRepository = new InMemoryProductRepository();

    const sut = new DeleteProduct(productRepository);
    const result = await sut.execute('invalid-id');

    expect(result.value).toBeInstanceOf(RequiredParametersError);
    expect(result.value.message).toEqual('Produto não encontrado');

  });

});