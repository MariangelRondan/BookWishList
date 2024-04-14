import { Router } from "express";
import { deleteUser, newUser, updateUser,loginUser, getAllUsers } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.post('/register', newUser )
userRouter.post('/login', loginUser )
userRouter.post('/', deleteUser )
userRouter.delete('/:id', updateUser )
userRouter.get('/', getAllUsers)