import { describe, expect, it } from 'vitest';
import { Product } from './product';
import { Decimal } from '@prisma/client/runtime/library';

describe('Product Entity', () => {

  it('should be able to create new product', () => {
    
    const newProduct = new Product({
      id: '1',
      code: '1',
      description: 'product-test',
      name: 'team-shirt',
      price: new Decimal(200)
    });

    expect(newProduct).toBeInstanceOf(Product);
  });

}); 