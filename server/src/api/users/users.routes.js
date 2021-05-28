import express from 'express';
import asyncHandler from 'express-async-handler';
import { getProfile, login } from './users.controller';
import { authGuard } from '../../middlewares';

const router = express.Router();

router.post('/login', asyncHandler(login));

router.get('/profile', authGuard, asyncHandler(getProfile));

export { router as usersRoutes };
