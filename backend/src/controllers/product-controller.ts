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

    await createProduct.execute({
      code,
      description,
      name,
      price
    });

    response.status(201).json({ message: 'Product created successfully' });
    return;
  }

}