import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  errorMessage: string | undefined;

  private APIUrl: string;


  constructor(
   private http: HttpClient){
      this.APIUrl= 'http://localhost:3001';

      }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getBooks(userEmail: any): Observable<Book[]>{
    const token = localStorage.getItem('token')

    const AuthHeader = new HttpHeaders().set('Authorization',`Bearer ${token}`)
   


    return this.http.get<Book[]>(`${this.APIUrl}/api/book/${userEmail}`,{headers: AuthHeader });

  }

  updateBookReadStatus(bookId: string, readStatus: string) {
    return this.http.patch(`${this.APIUrl}/api/book/${bookId}`, { status: readStatus });
  }    

  newBook(book:object, userEmail: string | null): Observable<unknown>{
    const body = { ...book, userEmail: userEmail };
  return this.http.post(`${this.APIUrl}/api/book`, body)
  }

  deleteBook(id: string): Observable<unknown>{
    return this.http.delete(`${this.APIUrl}/api/book/${id}`)
  }
    
    }
