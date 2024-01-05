import { Request, Response } from 'express';
import { CreateProduct, CreateProductRequest } from '../use-cases/create-product';
import { PrismaProductRepository } from '../repositories/prisma-product-repository';

export class ProductController {

  static async createProduct(request: Request<{}, {}, CreateProductRequest>, response: Response) {

    const {
      code,
      description,
      name,
      price
    } = request.body;

    const productRepository = new PrismaProductRepository();
    const createProduct = new CreateProduct(productRepository);

    const result = await createProduct.execute({
      code,
      description,
      name,
      price
    });

    if (result.isLeft()) {
      response.status(result.value.statusCode).json(result.value.message);
      return;
    }

    response.status(200).json(result.value);
    return;
  }

}