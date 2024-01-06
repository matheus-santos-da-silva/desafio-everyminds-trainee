import { ProductProps } from '../../DTOS/product-dto';
import { Product } from '../../entities/product';
import { CreateProductRequest } from '../../use-cases/create-product';
import { EditProductRequest } from '../../use-cases/edit-product';
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

  async getProductById(id: string): Promise<ProductProps | null> {
  
    const product = this.products.find((product) => product.id === id);
    if(!product) return null;

    return product;
  }

  async editProduct(id: string, props: EditProductRequest): Promise<void> {
    for (const product of this.products) {
      if (product.id === id) {
        Object.assign(product, props);
      }
    }
  }

  async deleteProduct(id: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const product of this.products) {
      const index = this.products.findIndex((product) => product.id === id);
      this.products.splice(index, 1);
    }
  }
}