import { Response, Request } from 'express';

const errors: { [key: string]: number } = {
  ValidationError: 400, 
  UnauthorizedError: 401,
  NotFoundError: 404,
};
const handleError = async (error: Error, _req: Request, res: Response) => {
  const { name, message } = error;
  const status: number = errors[name];
  if (!status) return res.status(500).json({ message: 'Internal server error' });
  return res.status(status).json({ message });
};  

export default handleError;