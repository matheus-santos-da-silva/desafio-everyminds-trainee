import { ProductProps } from '../DTOS/product-dto';
import { prismaClient } from '../database/prisma-client';
import { CreateProductRequest } from '../use-cases/create-product';
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

}