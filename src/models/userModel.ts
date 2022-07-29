import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser } from '../interfaces/userInterFace';

const createUser = async (user: IUser): Promise<IUser> => {
  const q = 'Insert into Trybesmith.Users (username, classe, level, password) values (?, ?, ?, ?)';
  await connection
    .execute<ResultSetHeader>(q, [user.username, user.classe, user.level, user.password]);
  return user;
};

export default { createUser };