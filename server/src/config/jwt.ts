import jwt from 'jsonwebtoken';
import { envs } from './envs';

const JWT_PUBLIC_KEY = envs.JWT_PUBLIC_KEY;

export class Jwt{

    static async generateToken(
        payload: Object,
        duration: string = '2h'): Promise<string|null>{
            return new Promise((resolve)=> {
                jwt.sign(payload, JWT_PUBLIC_KEY, {expiresIn: duration}, (err, token)=> {
                    if(err) return resolve(null);

                    resolve(token!)
                })
                })
        }


        static async validateToken<T>(token: string): Promise<T| null>{
            return new Promise((resolve)=>{

                jwt.verify(token, JWT_PUBLIC_KEY, (err, decoded)=>{
                    if(err) return resolve(null);

                    resolve(decoded as T)
                })
            })
        }
}
