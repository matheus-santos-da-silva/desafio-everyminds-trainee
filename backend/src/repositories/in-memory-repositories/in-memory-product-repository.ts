import { Product } from '../../entities/product';
import { CreateProductRequest } from '../../use-cases/create-product';
import { ProductsRepository } from '../product-repository';

export class InMemoryProductRepository implements ProductsRepository{

  products: Product[] = []; 

  async create({
    code,
    description,
    name,
    price
  }: CreateProductRequest): Promise<void> {
    
    const product = new Product({
      code,
      description,
      name,
      price
    });

    this.products.push(product);
  }

}