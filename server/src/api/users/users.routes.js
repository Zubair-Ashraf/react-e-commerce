import express from 'express';
import asyncHandler from 'express-async-handler';
import { login } from './users.controller';

const router = express.Router();

router.post('/login', asyncHandler(login));

export { router as usersRoutes };
