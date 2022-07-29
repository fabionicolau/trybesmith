import express from 'express';
import ordersController from '../controllers/ordersController';

const router = express.Router();

router.get('/', ordersController.getAllOrders);

export default router;