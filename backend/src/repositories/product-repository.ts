import { CreateProductRequest } from '../use-cases/create-product';

export interface ProductsRepository{
  create(props: CreateProductRequest):Promise<void>

}