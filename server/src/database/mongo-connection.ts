import mongoose,{connect} from 'mongoose';
import { envs } from '../config';


interface Options{
    mongoUrl:string;
    dbName:string;    
}



export const connectDB =() =>{
    mongoose.set('strictQuery', true);

    connect(envs.CONNECTION_STRING as string)
}