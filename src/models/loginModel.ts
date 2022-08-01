import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUserLogin, IUser } from '../interfaces/userInterFace';

const userLogin = async (body: IUserLogin): Promise<IUser> => {
  const [user] = await connection.execute(`
    SELECT * FROM Trybesmith.Users WHERE username = ?;
  `, [body.username]) as RowDataPacket[]; 

  return user[0] as IUser;
};

export default { userLogin };