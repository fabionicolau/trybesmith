import { IProduct } from '../interfaces/productsInterface';
import ProductsModel from '../models/productsModel';

const getAllProducts = async () => {
  const products = await ProductsModel.getAllProducts();
  return products;
};

const create = async (product: IProduct) => {
  const newProduct = await ProductsModel.create(product);
  return newProduct;
};

export default {
  create,
  getAllProducts,
};
