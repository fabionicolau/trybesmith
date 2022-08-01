import { Request, Response } from 'express';
import { IProduct } from '../interfaces/productsInterface';
import handleError from '../middlewares/handleError';
import ProductsService from '../services/productsService';

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await ProductsService.getAllProducts();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body as IProduct;
    const product = await ProductsService.create({ name, amount });
    res.status(201).json(product);
  } catch (error) {
    handleError(error as Error, req, res);
  }
};

export default {
  create,
  getAllProducts,
};