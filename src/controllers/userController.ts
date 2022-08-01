import { Response, Request } from 'express';
import { IUser } from '../interfaces/userInterFace';
import handleError from '../middlewares/handleError';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body as IUser;
    const token = await userService.createUser(user);
    res.status(201).json({ token });
  } catch (error) {
    handleError(error as Error, req, res);
  }
};

export default { createUser };