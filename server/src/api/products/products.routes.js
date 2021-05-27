import express from 'express';
import asyncHandler from 'express-async-handler';
import { getProduct, getProducts } from './products.controller';

const router = express.Router();

router.get('/', asyncHandler(getProducts));

router.get('/:id', asyncHandler(getProduct));

export { router as productsRoutes };
