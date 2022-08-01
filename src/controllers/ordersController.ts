import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import handleError from '../middlewares/handleError';
import ordersService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  res.status(200).json(orders);
}; 

const createOrder = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    const { id } = jwt.decode(authorization as string) as { id: number };
    const order = await ordersService.createOrder({ userId: id, productsIds });
    res.status(201).json(order); 
  } catch (error) {
    handleError(error as Error, req, res);
  }
};

export default { getAllOrders, createOrder };