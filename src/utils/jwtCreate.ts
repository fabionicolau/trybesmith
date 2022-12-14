import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser, IUserPayload } from '../interfaces/userInterFace';

dotenv.config();

const generateToken = (data: IUser): string => {
  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  } as SignOptions;

  const privateKey = process.env.JWT_SECRET || 'secret' as Secret;
  const { id, username, classe, level } = data as IUserPayload;

  const token = jwt.sign({ id, username, classe, level }, privateKey, jwtConfig);

  return token;
};

export default generateToken;