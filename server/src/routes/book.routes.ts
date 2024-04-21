import { Router } from "express";
import { deleteAllBooks, deleteBook, getAllBooks, newBook, updateBook } from "../controllers/book.controller";
import {AuthMiddleware} from '../middlewares/middlewares'


export const bookRouter = Router();

bookRouter.get('/:userEmail', AuthMiddleware.validateJwt, getAllBooks )
bookRouter.post('/', newBook )
bookRouter.delete('/', deleteAllBooks)
bookRouter.delete('/:id', deleteBook )
bookRouter.patch('/:id', updateBook )
