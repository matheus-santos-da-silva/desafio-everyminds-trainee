import { Decimal } from '@prisma/client/runtime/library';
import { ProductsRepository } from '../repositories/product-repository';

export type CreateProductRequest = {
  name: string
  code: string
  description: string
  price: Decimal
}

export class CreateProduct {

  constructor(
    private productsRepository: ProductsRepository
  ) {}

  async execute({
    code,
    description,
    name,
    price
  }:CreateProductRequest):Promise<void> {

    await this.productsRepository.create({
      code,
      description,
      name,
      price
    });
  }
}