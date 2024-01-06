import { ProductProps } from '../DTOS/product-dto';
import { prismaClient } from '../database/prisma-client';
import { CreateProductRequest } from '../use-cases/create-product';
import { EditProductRequest } from '../use-cases/edit-product';
import { ProductsRepository } from './product-repository';

export class PrismaProductRepository implements ProductsRepository{

  async create({
    code,
    description,
    name,
    price
  }: CreateProductRequest) {

    await prismaClient.product.create({
      data: { 
        code,
        description,
        name,
        price
      }
    });

  }

  async checkIfCodeExists(code: string): Promise<ProductProps | null> {
    
    const product = await prismaClient.product.findFirst({ where: { code } });
    if(!product) return null;

    return product;
  }

  async getProducts(): Promise<ProductProps[]> {
    const result = await prismaClient.product.findMany({});
    return result;
  }

  async getProductById(id: string): Promise<ProductProps | null> {
    const product = await prismaClient.product.findFirst({ where: { id } });
    if(!product) return null;

    return product;
  }

  async editProduct(id: string, {
    description,
    name,
    price
  }: EditProductRequest): Promise<void> {
    
    await prismaClient.product.update({
      where: { id },
      data: { 
        description,
        name,
        price
      }
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await prismaClient.product.delete({ where: { id } });
  }
}