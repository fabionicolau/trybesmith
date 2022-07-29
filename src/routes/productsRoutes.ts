import express from 'express';
import ProductsController from '../controllers/productsController';

const router = express.Router();

router.post('/', ProductsController.create);

export default router;