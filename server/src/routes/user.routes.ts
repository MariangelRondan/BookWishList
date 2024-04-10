import { Router } from "express";
import { deleteUser, newUser, updateUser } from "../controllers/user.controller";





export const userRouter = Router();

userRouter.get('/', newUser )
userRouter.post('/', deleteUser )
userRouter.delete('/:id', updateUser )
