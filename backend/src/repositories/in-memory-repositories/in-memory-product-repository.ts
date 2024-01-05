import { ProductProps } from '../../DTOS/product-dto';
import { Product } from '../../entities/product';
import { CreateProductRequest } from '../../use-cases/create-product';
import { ProductsRepository } from '../product-repository';

export class InMemoryProductRepository implements ProductsRepository{

  products: Product[] = []; 

  async create({
    id, 
    code,
    description,
    name,
    price
  }: CreateProductRequest): Promise<void> {
    
    const product = new Product({
      id,
      code,
      description,
      name,
      price
    });

    this.products.push(product);
  }

  async checkIfCodeExists(code: string): Promise<ProductProps | null> {
    
    const product = this.products.find((product) =>  product.code === code );
    if(!product) return null;
  
    return product;
  }

  async getProducts(): Promise<ProductProps[]> {
    const product = this.products;
    return product;
  }

}