import { IUser } from '../interfaces/userInterFace';
import userModel from '../models/userModel';
import generateToken from '../utils/jwtCreate';

const createUser = async (user: IUser): Promise<string> => {
  await userModel.createUser(user);
  const token = generateToken(user);
  return token;
};

export default { createUser };