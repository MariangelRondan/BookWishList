import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import  {Book}  from '../../../interfaces';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  readonly APIUrl='http://localhost:3000/api/book'
  books: Book[] = []

  constructor(private http:HttpClient){
    }

    ngOnInit(){
      this.refreshBooks()
    }

    refreshBooks(){
      this.http.get<Book[]>(this.APIUrl).subscribe(data => {
        this.books = data
      })
    }
}
