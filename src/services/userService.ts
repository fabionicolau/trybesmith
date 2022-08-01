import Joi from 'joi';
import { IUser } from '../interfaces/userInterFace';
import userModel from '../models/userModel';
import generateToken from '../utils/jwtCreate';

const validateFields = async ({ username, classe, level, password }: IUser) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required().messages({ 'string.empty': '"username" is required',
      'string.type': '"username" must be a string',
      'string.min': '"username" length must be at least 3 characters long' }),
    classe: Joi.string().min(3).required().messages({ 'string.empty': '"classe" is required',
      'string.type': '"classe" must be a string',
      'string.min': '"classe" length must be at least 3 characters long' }),
    level: Joi.number().min(1).required().messages({ 'string.empty': '"level" is required',
      'number.type': '"level" must be a number',
      'number.min': '"level" must be greater than or equal to 1' }),
    password: Joi.string().min(8).required().messages({ 'string.empty': '"password" is required',
      'string.type': '"password" must be a string',
      'string.min': '"password" length must be at least 8 characters long' }) }); 
  
  const { error, value } = schema.validate({ username, classe, level, password });
  if (error) throw error;
  return value; 
};

const createUser = async (user: IUser): Promise<string> => {
  const data = await validateFields(user);
  const userData = await userModel.createUser(data);
  const token = generateToken(userData);
  return token;
};

export default { createUser };