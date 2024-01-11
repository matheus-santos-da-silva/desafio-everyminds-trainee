import express from 'express';
import productRoutes from '../routes/product-routes';
import cors from 'cors';
class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(cors({ credentials: true, origin: `${process.env.FRONTEND_URL}` }));
  }

  private routes(): void {
    this.express.use('/products', productRoutes);
  }
}

export default new App().express;