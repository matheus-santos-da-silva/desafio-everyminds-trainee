import { Request, Response } from 'express';
import { CreateProduct, CreateProductRequest } from '../use-cases/create-product';
import { PrismaProductRepository } from '../repositories/prisma-product-repository';
import { randomUUID } from 'node:crypto';
import { GetProducts } from '../use-cases/get-products';

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
      id: randomUUID(),
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

  static async getProducts(request: Request, response: Response) {

    const productRepository = new PrismaProductRepository();
    const getProducts = new GetProducts(productRepository);

    const result = await getProducts.execute();

    if (result.isLeft()) {
      response.status(result.value.statusCode).json(result.value.message);
      return;
    }

    response.status(200).json(result.value);
    return;
  }

}