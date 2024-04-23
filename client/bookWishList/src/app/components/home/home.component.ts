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
  
  books: Book[] = []



  constructor(private _bookServices: BookService){
    }

    ngOnInit(){
     
    this.getBooks();
        
    }

    getBooks(){
    const userEmail = localStorage.getItem('User')
     
    this._bookServices.getBooks(userEmail).subscribe(data => {
    this.books = data;
   
     })
    }

    deleteBook(id: string){
// eslint-disable-next-line @typescript-eslint/no-unused-vars
this._bookServices.deleteBook(id).subscribe(data => {
  
  window.location.reload()
})
  }


    toggleRead(book: Book) {
      const newStatus = book.status === 'read' ? 'not_read' : 'read'; 
      this._bookServices.updateBookReadStatus(book._id, newStatus).subscribe(() => {
      window.location.reload(); 
    
    });
    }
}
