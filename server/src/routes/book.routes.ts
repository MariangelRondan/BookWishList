import { Router } from "express";
import { deleteBook, getAllBooks, newBook, updateBook } from "../controllers/book.controller";



export const bookRouter = Router();

bookRouter.get('/', getAllBooks )
bookRouter.post('/', newBook )
bookRouter.delete('/:id', deleteBook )
bookRouter.patch('/:id', updateBook )
