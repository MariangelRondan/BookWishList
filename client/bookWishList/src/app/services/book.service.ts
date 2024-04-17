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
  getBooks(): Observable<Book[]>{
    const token = localStorage.getItem('token')

    const AuthHeader = new HttpHeaders().set('Authorization',`Bearer ${token}`)


    return this.http.get<Book[]>(`${this.APIUrl}/api/book`,{headers: AuthHeader});

  }

  updateBookReadStatus(bookId: string, readStatus: string) {
    return this.http.patch(`${this.APIUrl}/api/book/${bookId}`, { status: readStatus });
  }    
    
    }
