import { Component, OnInit } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';
import { CommonModule,NgFor } from '@angular/common';

import  {Book}  from '../../../interfaces';
import { NavbarComponent } from "../navbar/navbar.component";
import { BookService } from '../../services/book.service';




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

  constructor(private _bookServices: BookService){
    }

    ngOnInit(){
      this.getBooks()
    }

    getBooks(){
     this._bookServices.getBooks().subscribe(data => {
    this.books = data
     })
    }


    toggleRead(book: Book) {
      const newStatus = book.status === 'read' ? 'not_read' : 'read'; 
      this._bookServices.updateBookReadStatus(book._id, newStatus).subscribe(() => {
        window.location.reload(); });
    }
}
