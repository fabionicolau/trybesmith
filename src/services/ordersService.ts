import Joi from 'joi';
import ordersModel from '../models/ordersModel';
import { ICreatedOrder, IOrder } from '../interfaces/orderInterface';

const validateFields = async ({ productsIds }: ICreatedOrder) => {
  const schema = Joi.object({
    productsIds: Joi.array().min(1).items(Joi.number()).required()
      .messages({ 
        'productsIds.required': 'productsIds is required',
        'array.type': '"productsIds" must be an array',
        'array.min': '"productsIds" must include only numbers',
      }),
  });
  
  const { error, value } = schema.validate({ productsIds });
  if (error) throw error;
  return value; 
};

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAllOrders();
  return orders as IOrder[];
}; 

const createOrder = async ({ userId, productsIds }: ICreatedOrder) => {
  const data = await validateFields({ userId, productsIds });
  const order = await ordersModel.createOrder({ userId, productsIds: data.productsIds });
  return order;
};

export default { getAllOrders, createOrder };