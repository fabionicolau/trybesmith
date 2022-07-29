import { Request, Response } from 'express';
import IProduct from '../interfaces/productsInterface';
import ProductsService from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body as IProduct;
  const product = await ProductsService.create({ name, amount });
  res.status(201).json(product);
};

export default {
  create,
};