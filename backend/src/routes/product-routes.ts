import { Router } from 'express';
import { validationMiddleware } from '../middleware/validation';
import { CreateProductValidation } from '../utils/product-validation-schema';
import { ProductController } from '../controllers/product-controller';

const router = Router();

router.post('/create', validationMiddleware(CreateProductValidation), ProductController.createProduct);
router.get('/', ProductController.getProducts);

export default router;