import express from 'express';
import ProductsRouter from './routes/productsRoutes';
import UserRouter from './routes/userRoutes';
import OrdersRouter from './routes/ordersRoutes';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', UserRouter);
app.use('/products', ProductsRouter);
app.use('/orders', OrdersRouter);

export default app;
