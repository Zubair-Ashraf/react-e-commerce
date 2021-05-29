import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  getProfile,
  updateProfile,
  changePassword,
  login,
  register,
} from './users.controller';
import { authGuard } from '../../middlewares';

const router = express.Router();

router.post('/register', asyncHandler(register));

router.post('/login', asyncHandler(login));

router.get('/profile', authGuard, asyncHandler(getProfile));

router.put('/profile', authGuard, asyncHandler(updateProfile));

router.post('/change-password', authGuard, asyncHandler(changePassword));

export { router as usersRoutes };
