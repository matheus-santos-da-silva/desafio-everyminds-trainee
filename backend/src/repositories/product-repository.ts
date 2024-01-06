import { ProductProps } from '../DTOS/product-dto';
import { CreateProductRequest } from '../use-cases/create-product';
import { EditProductRequest } from '../use-cases/edit-product';

export interface ProductsRepository{
  create(props: CreateProductRequest):Promise<void>
  checkIfCodeExists(code: string):Promise<ProductProps | null>
  getProducts():Promise<ProductProps[]>
  getProductById(id: string):Promise<ProductProps | null>
  editProduct(id: string, props: EditProductRequest): Promise<void>
  deleteProduct(id: string): Promise<void>
}