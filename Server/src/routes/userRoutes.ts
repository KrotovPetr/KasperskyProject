import { Router } from 'express';
import userController from '../controllers/userController';
export const userRouter: Router = Router();
userRouter.get('/', userController.getAllUsersWithSort);
