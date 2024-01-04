import { describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../repositories/in-memory-repositories/in-memory-product-repository';
import { CreateProduct } from './create-product';
import { Decimal } from '@prisma/client/runtime/library';

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

});