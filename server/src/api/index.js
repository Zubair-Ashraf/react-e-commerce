import express from 'express';
import { productsRoutes } from './products';
import { usersRoutes } from './users';

const routes = express.Router();

routes.use('/products', productsRoutes);

routes.use('/auth', usersRoutes);

export default routes;
