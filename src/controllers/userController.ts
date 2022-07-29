import { Response, Request } from 'express';
import { IUser } from '../interfaces/userInterFace';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const token = await userService.createUser(user);
  res.status(201).json({ token });
};

export default { createUser };