import Joi from 'joi';
import loginModel from '../models/loginModel';
import { IUserLogin, IUser } from '../interfaces/userInterFace';
import generateToken from '../utils/jwtCreate';

const validateFields = ({ username, password }: IUserLogin): IUserLogin => {
  const schema = Joi.object().keys({
    username: Joi.string().required().messages({
      'string.empty': '"username" is required',
    }),
    password: Joi.string().required().messages({
      'string.empty': '"password" is required',
    }),
  });

  const { error, value } = schema.validate({ username, password });
  if (error) throw error;
  return value;
};

const userLogin = async ({ username, password }: IUserLogin): Promise<string> => {
  const data: IUserLogin = validateFields({ username, password });
  const user: IUser = await loginModel.userLogin(data);
  if (!user || user.password !== password) {
    const err = new Error('Username or password invalid');
    err.name = 'UnauthorizedError';
    throw err;
  }

  const token = generateToken(user);
  return token as string;
};

export default { userLogin };