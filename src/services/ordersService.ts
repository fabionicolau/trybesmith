import ordersModel from '../models/ordersModel';
import { IOrder } from '../interfaces/orderInterface';

const getAllOrders = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAllOrders();
  return orders as IOrder[];
}; 

export default { getAllOrders };