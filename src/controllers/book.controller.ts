import { Response, Request } from "express";



export const getAllBooks = (req: Request, res: Response) =>{

    try {
        return res.json([])
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }

}