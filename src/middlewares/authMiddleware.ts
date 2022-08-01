import { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';

dotenv.config();
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ message: 'Token not found' });
  }
  try {
    const privateKey = process.env.JWT_SECRET || 'secret' as Secret;
    jwt.verify(authorization as string, privateKey);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;