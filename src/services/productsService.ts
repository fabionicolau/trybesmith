import Joi from 'joi';
import { IProduct } from '../interfaces/productsInterface';
import ProductsModel from '../models/productsModel';

const validateFields = async ({ name, amount }: IProduct) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
      'string.empty': '"name" is required',
      'string.type': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long',
    }),
    amount: Joi.string().min(3).required().messages({
      'string.empty': '"amount" is required',
      'string.type': '"amount" must be a string',
      'string.min': '"amount" length must be at least 3 characters long',
    }),
  });

  const { error, value } = schema.validate({ name, amount });
  if (error) throw error;
  return value;
};

const getAllProducts = async () => {
  const products = await ProductsModel.getAllProducts();
  return products;
};

const create = async (product: IProduct) => {
  const data = await validateFields(product);
  const newProduct = await ProductsModel.create(data);
  return newProduct;
};

export default {
  create,
  getAllProducts,
};
