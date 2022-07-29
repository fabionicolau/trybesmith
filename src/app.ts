import express from 'express';
import ProductsRouter from './routes/productsRoutes';
import UserRouter from './routes/userRoutes';
import OrdersRouter from './routes/ordersRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UserRouter);
app.use('/orders', OrdersRouter);

export default app;
