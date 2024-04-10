import express, {Router, Express} from 'express';
import { MongoClient, MongoClientOptions } from 'mongodb';
import cors from 'cors';
import multer from 'multer';
import {PORT} from './config';
import {bookRouter} from './routes/book.routes'
import {connectDB} from './database'
import { userRouter } from './routes';


interface Options{
    port: number;
    routes: Router;
}


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
        this.app.set('port', PORT || 3000)
    }

    routes(){
        this.app.get('/', (req, res)=> {
            res.json({
                name: 'API REST BOOK WISH LIST'
            })
        })

        this.app.use('/api/book', bookRouter)
        this.app.use('/auth', userRouter)
    }

    middleware(){
        this.app.use(cors({
            origin: 'http://localhost:4200'
          }));
          
        this.app.use(express.json())
       
    }
   

    listen(){
        this.app.listen(this.app.get('port'), () => {
            console.log('server running on PORT', this.app.get('port'))
        })
    }
}