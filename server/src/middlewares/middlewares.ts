import {NextFunction, Request, Response } from "express";
import { Jwt } from "../config/jwt";
import { UserModel } from "../database/models/user.model";


export class AuthMiddleware {

static validateJwt = async (req: Request, res: Response, next: NextFunction)=>{


const authorization= req.header('Authorization');

if(!authorization) return res.status(401).json({error: 'No token provided'});
if(!authorization.startsWith('Bearer')) return res.status(401).json({error: 'Invalid Bearer token'});


const token = authorization.split(' ').at(1) || ''; //poner at(1) es lo mismo que poner [1]. refiere a posicion de array


try {

    const payload= await Jwt.validateToken<{email: string}>(token);
  
    //payload es => { id: '6612fbba306a619c8d509618', iat: 1712520123, exp: 1712527323 }  contiene el id del usuario del token
    if(!payload) return res.status(401).json({error: 'Invalid token'});

    const user = await UserModel.findOne({email: payload.email})
    if(!user) return res.status(401).json({error: 'Invalid token'})

    req.body.user = user;
    
} catch (error) {
    console.log(error);
    res.status(500).json({error})

}

    next();

}

}
