import { ProductProps } from '../DTOS/product-dto';
import { CreateProductRequest } from '../use-cases/create-product';

export interface ProductsRepository{
  create(props: CreateProductRequest):Promise<void>
  checkIfCodeExists(code: string):Promise<ProductProps | null>
  getProducts():Promise<ProductProps[]>
}