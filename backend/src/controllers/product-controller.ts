import { Request, Response } from 'express';
import { CreateProduct, CreateProductRequest } from '../use-cases/create-product';
import { PrismaProductRepository } from '../repositories/prisma-product-repository';
import { randomUUID } from 'node:crypto';
import { GetProducts } from '../use-cases/get-products';
import { EditProduct, EditProductRequest } from '../use-cases/edit-product';
import { DeleteProduct } from '../use-cases/delete-product';
import { GetProductById } from '../use-cases/get-product-by-id';
import { generateProductCode } from '../utils/generate-product-code';

export class ProductController {

  static async createProduct(request: Request<{}, {}, CreateProductRequest>, response: Response) {

    const {
      description,
      name,
      price
    } = request.body;

    const productRepository = new PrismaProductRepository();
    const createProduct = new CreateProduct(productRepository);

    const result = await createProduct.execute({
      id: randomUUID(),
      code: generateProductCode(),
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

  static async editProduct(request: Request<{ id: string }, {}, EditProductRequest>, response: Response) {
    const id = request.params.id;
  
    const { 
      description,
      name,
      price
    } = request.body;

    const productRepository = new PrismaProductRepository();
    const editProduct = new EditProduct(productRepository);

    const result = await editProduct.execute(
      id,
      {
        description,
        name,
        price
      }
    );

    if (result.isLeft()) {
      response.status(result.value.statusCode).json(result.value.message);
      return;
    }

    response.status(200).json(result.value);
    return;
  }

  static async deleteProduct(request: Request, response: Response) {

    const id = request.params.id;

    const productRepository = new PrismaProductRepository();
    const deleteProduct = new DeleteProduct(productRepository);

    const result = await deleteProduct.execute(id);

    if (result.isLeft()) {
      response.status(result.value.statusCode).json(result.value.message);
      return;
    }

    response.status(200).json(result.value);
    return;
  }

  static async getProductById(request: Request, response: Response) {

    const id = request.params.id;

    const productRepository = new PrismaProductRepository();
    const getProductById = new GetProductById(productRepository);

    const result = await getProductById.execute(id);

    if (result.isLeft()) {
      response.status(result.value.statusCode).json(result.value.message);
      return;
    }

    response.status(200).json(result.value);
    return;

  }

}