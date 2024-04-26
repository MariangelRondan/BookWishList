import express, {Router, Express} from 'express';
import cors from 'cors';
import {bookRouter} from './routes/book.routes'
import {connectDB} from './database'
import { userRouter } from './routes';
import { envs } from './config';




export class Server{
    public readonly app=express()
    
    constructor(){
        
      

            this.app = express();
            connectDB()
            this.config();
            this.middleware();
            this.config();
            this.routes();

        }

    config(){
        this.app.set('port', envs.PORT || 3000)
    }

    routes(){
        this.app.use('/api/book', bookRouter)
        this.app.use('/auth', userRouter)
    }

    middleware(){
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        });

        this.app.use(cors());
          
        this.app.use(express.json())
       

    }
   

    listen(){
        this.app.listen(this.app.get('port'), () => {
            console.log('server running on PORT', envs.PORT)
        })
    }
}