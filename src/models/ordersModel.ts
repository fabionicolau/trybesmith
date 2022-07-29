import { RowDataPacket } from 'mysql2';
import { IOrder, IOrderWithourProductsIds } from '../interfaces/orderInterface';
import { ProductsIds } from '../interfaces/productsInterface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const q = `
  SELECT orders.id, orders.userId
  FROM Trybesmith.Products as products
  INNER JOIN Trybesmith.Orders as orders
  ON orders.id = products.orderId
  GROUP BY orders.id
  ORDER BY orders.userId
  `;
  const [table] = await connection.execute(q) as RowDataPacket[];

  const orders = Promise.all(table.map(async ({ id, userId }: IOrderWithourProductsIds) => {
    const [product] = await connection.execute(`
    SELECT Trybesmith.Products.id FROM Trybesmith.Products WHERE orderId = ?
    `, [id]) as RowDataPacket[];
    return { id, userId, productsIds: product.map((p: ProductsIds) => p.id) };
  })) as Promise<IOrder[]>;

  return orders;
}; 

export default { getAllOrders };