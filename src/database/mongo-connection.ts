import mongoose,{connect} from 'mongoose';
import {CONNECTION_STRING} from '../config';





export const connectDB =() =>{
    mongoose.set('strictQuery', true);

    connect(CONNECTION_STRING as string)
}