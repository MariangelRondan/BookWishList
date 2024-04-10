import { Response, Request } from "express";
import { bookService } from "../services";


export const getAllBooks = async  (req: Request, res: Response) =>{

    try {
        const data = await bookService.getAllBooks()
        return res.json(data)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }

}

export const newBook = async (req: Request, res: Response)=>{
    try {
        const data = await bookService.postBook(req.body)
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
    
        


