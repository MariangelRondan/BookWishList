import { User } from "../interfaces/interface";
import { userService } from "../services"
import { Response, Request } from "express";


    export const newUser = async (req: Request, res: Response)=>{
    try {
        
        const data = await userService.postUser(req.body)
        return res.json(data);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
    }

    export const updateUser = async (req: Request, res: Response)=>{
    try {
        const {id}= req.params;
        const data = await userService.updateUser(id, req.body)
        return res.json(data);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
    }

    export const deleteUser = async (req: Request, res: Response)=>{
    try {
        const {id}= req.params;
        const data = await userService.deleteUser(id)
        return res.json(data);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
    }
    

    export const loginUser=(req: Request, res: Response)=>{

    }

    









