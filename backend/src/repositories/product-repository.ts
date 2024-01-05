import { ProductProps } from '../DTOS/product-dto';
import { Product } from '../entities/product';
import { CreateProductRequest } from '../use-cases/create-product';

export interface ProductsRepository{
  create(props: CreateProductRequest):Promise<void>
  checkIfCodeExists(code: string):Promise<ProductProps | Product | null>
}