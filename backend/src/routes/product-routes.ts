import { Router } from 'express';
import { validationMiddleware } from '../middleware/validation';
import { CreateProductValidation } from '../utils/product-validation-schema';
import { ProductController } from '../controllers/product-controller';
import { EditProductValidationSchema } from '../utils/edit-product-validation-schema';

const router = Router();

router.post('/create', validationMiddleware(CreateProductValidation), ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.patch('/edit/:id', validationMiddleware(EditProductValidationSchema),ProductController.editProduct);
router.get('/:id', ProductController.getProductById);
router.delete('/:id', ProductController.deleteProduct);

export default router;