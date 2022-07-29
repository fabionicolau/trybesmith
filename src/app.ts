import express from 'express';
import ProductsRouter from './routes/productsRoutes';
import UserRouter from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UserRouter);

export default app;
