import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [RouterModule, FormsModule, NavbarComponent],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {
  readonly APIUrl='http://localhost:3001/api/book'
  name: string = '';
  author: string = '';
  description: string = '';
  

  constructor(private _bookServices: BookService){}

ngOnInit(): void {
return
}

postBook(){
  const userEmail = localStorage.getItem('User')
if(!userEmail){
  console.log('Usuario no encontrado')
}
  const book: object ={
    name: this.name,
    author: this.author,
    description: this.description,
    
  }
  this._bookServices.newBook(book, userEmail).subscribe({
    next: (v) =>{
      console.log(v)
      Swal.fire('Ha sido añadido', 'Libro agregado a tu lista de deseos', 'success')
   
    },
    error: (e: HttpErrorResponse) => {
      if (e.error && e.error.error) {
        Swal.fire('Error', e.error.error, 'error'); // Muestra el mensaje de error con SweetAlert
      } else {
        Swal.fire('Error', 'Error desconocido', 'error'); // Mensaje de error genérico
      }    
    }
  })
}




}
