import express from 'express';
import ordersController from '../controllers/ordersController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', ordersController.getAllOrders);
router.post('/', authMiddleware, ordersController.createOrder);

export default router;