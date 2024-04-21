import { BookModel } from "../database"


export const bookService = {
     async getAllBooks(userEmail : string){
       
            
      const books = await BookModel.find({owner: userEmail})


      console.log(books)
    return books;
},

    async postBook(entity: any, userEmail: string){

    entity.owner = userEmail;

    return await BookModel.create(entity)
    },

    async updateBook(id: string, body:object){
        await BookModel.findByIdAndUpdate(id, body);
        const updatedBook = await BookModel.findById(id);
        return  updatedBook;
    },

    async deleteBook(id: string){
        return await BookModel.findByIdAndDelete(id)
    },

    async deleteAllBooks(){
        return await BookModel.deleteMany({});
    }
 
}
