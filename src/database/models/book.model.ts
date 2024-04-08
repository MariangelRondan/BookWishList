import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name:{
        type: String
    },
    author:{
        type: String
    },
    status: {
        type: String,
        default: ['not_read'],
        enum: ['read, not_read']
    }
})

export const BookModel = model('Book', bookSchema)