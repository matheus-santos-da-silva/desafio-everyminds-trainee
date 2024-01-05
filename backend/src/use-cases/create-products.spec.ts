import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../repositories/in-memory-repositories/in-memory-product-repository';
import { CreateProduct } from './create-product';
import { Decimal } from '@prisma/client/runtime/library';
import { RequiredParametersError } from '../errors/required-parameters-error';

describe('Create-Products use case', () => {

  it('should be able to create a new Product', async () => {
    
    const productRepository = new InMemoryProductRepository();
    const sut = new CreateProduct(productRepository);

    await sut.execute({
      code: '1',
      description: 'product-test',
      name: 'team-shirt',
      price: new Decimal(150)
    });

    expect(productRepository.products).toHaveLength(1);
  });

  it('should not to be able to create a new Product if the code already exists', async () => {
    
    const productRepository = new InMemoryProductRepository();
    const sut = new CreateProduct(productRepository);

    await sut.execute({
      code: '1',
      description: 'product-test',
      name: 'team-shirt',
      price: new Decimal(150)
    });

    const result = await sut.execute({
      code: '1',
      description: 'product-test-2',
      name: 'team-shirt-2',
      price: new Decimal(150)
    });

    expect(result.value).toBeInstanceOf(RequiredParametersError);
    expect(result.value.message).toContain('Código do produto já existe, tente novamente com outro');
  });

});