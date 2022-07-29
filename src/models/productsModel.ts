import { ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productsInterface';
import connection from './connection';

const create = async (product: IProduct): Promise<IProduct> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [product.name, product.amount]);
  const { insertId } = result; 
  return {
    id: insertId,
    name: product.name,
    amount: product.amount,
  };
};

export default {
  create,
};