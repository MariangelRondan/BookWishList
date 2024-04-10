import { BookModel } from "../database"


export const bookService = {
     async getAllBooks(){
    return await BookModel.find()
},

    async postBook(entity: object){
    return await BookModel.create(entity)
    },

    async updateBook(id: string, body:object){
        await BookModel.findByIdAndUpdate(id, body);
        const updatedBook = await BookModel.findById(id);
        return  updatedBook;
    },

    async deleteBook(id: string){
        return await BookModel.findByIdAndDelete(id)
    }
 
}
