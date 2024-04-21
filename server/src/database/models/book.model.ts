import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name:{
        type: String
    },
    author:{
        type: String
    },
    description:{
        type: String
    },
    status: {
        type: String,
        default: 'not_read',
        enum: ['read', 'not_read']
    },
    owner: {
        type: String,
        ref: 'User' 
    }
})



export const BookModel = model('Book', bookSchema)