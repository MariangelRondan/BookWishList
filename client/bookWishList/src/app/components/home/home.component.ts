import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule,NgFor } from '@angular/common';

import  {Book}  from '../../../interfaces';
import { NavbarComponent } from "../navbar/navbar.component";




@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, HttpClientModule, NavbarComponent,NgFor]
})

export class HomeComponent implements OnInit{
  readonly APIUrl='http://localhost:3001/api/book'
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
