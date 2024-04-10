import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../interfaces/interfaces";

const APIUrl = 'http://localhost:3000/api/book'


@Injectable({
    providedIn: 'root'
})

export class BookService{
    constructor(
        private http: HttpClient
    ){}


        getAllBooks(): Observable<Book[]>{
            return this.http.get<Book[]>(APIUrl)
        }

        create(data: Book): Observable<any>{
            return this.http.post(APIUrl, data);
        }

        update(id: string, data: object): Observable<any>{
            return this.http.patch(`${APIUrl}/${id}}`, data);
        }

        deleteAll(): Observable<any>{
            return this.http.delete(APIUrl);
        }

        deleteBook(id:string): Observable<any>{
            return this.http.delete(`${APIUrl}/${id}}`)
        }



}