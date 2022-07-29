import IProduct from '../interfaces/productsInterface';
import ProductsModel from '../models/productsModel';

const create = async (product: IProduct) => {
  const newProduct = await ProductsModel.create(product);
  return newProduct;
};

export default {
  create,
};
