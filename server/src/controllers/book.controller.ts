import { Response, Request } from "express";
import { bookService } from "../services";


export const getAllBooks = async  (req: Request, res: Response) =>{

    try {
       
        const {userEmail} = req.params;

        const books = await bookService.getAllBooks(userEmail)
console.log('controller', books)

        return res.json(books)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }

}

export const newBook = async (req: Request, res: Response)=>{
    try {
        const {name, author, description, img, status, userEmail} = req.body 
        const book={
            name, author, description, img, status 
        }
        const data = await bookService.postBook(book,userEmail )
        return res.json(data);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
    }

    export const updateBook = async (req: Request, res: Response)=>{
        try {
            const {id} = req.params;
            const data = await bookService.updateBook(id, req.body)
            return res.json(data);
        } catch (error:any) {
            res.status(400).json({error: error.message})
        }
        }



    export const deleteBook = async (req: Request, res: Response)=>{
        try {
           const {id} = req.params;
         const data = await bookService.deleteBook(id)
        return res.json(data);
      } catch (error:any) {
          res.status(400).json({error: error.message})
      }
      }

      export const deleteAllBooks = async (req: Request, res: Response) =>{
        try {
            await bookService.deleteAllBooks()
            return res.status(200).json({message: 'Deleted successfully'})
        } catch (e: any) {
            res.status(500).json({error: e.message})

        }
      }
    
        
        


