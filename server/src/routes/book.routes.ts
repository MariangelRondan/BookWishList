import { Router } from "express";
import { deleteBook, getAllBooks, newBook, updateBook } from "../controllers/book.controller";
import {AuthMiddleware} from '../middlewares/middlewares'


export const bookRouter = Router();

bookRouter.get('/', AuthMiddleware.validateJwt, getAllBooks )
bookRouter.post('/', newBook )
bookRouter.delete('/:id', deleteBook )
bookRouter.patch('/:id', updateBook )
