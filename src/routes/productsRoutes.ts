import express from 'express';
import ProductsController from '../controllers/productsController';

const router = express.Router();

router.get('/', ProductsController.getAllProducts);
router.post('/', ProductsController.create);

export default router;