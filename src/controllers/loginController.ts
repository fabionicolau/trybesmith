import { Request, Response } from 'express';
import loginService from '../services/loginService';
import handleError from '../middlewares/handleError';

const userLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token: string = await loginService.userLogin({ username, password });
    res.status(200).json({ token });
  } catch (Error) {
    handleError(Error as Error, req, res);
  }
};

export default { userLogin };