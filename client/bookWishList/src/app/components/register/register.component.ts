import { Component,  OnInit } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../interfaces';
import { UserService } from '../../services/user.services';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, NgIf,FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
email: string = '';
password: string = '';
name: string = '';
img: string = '';
errorMessage: string='';

constructor(
  private _userService: UserService,
private router: Router){}
 

ngOnInit(): void {
  console.log('puto')
}

newUser(){
  if(this.email === '' || this. password===''|| this.name === ''){
    Swal.fire('Campos obligatorios', 'Todos los campos son obligatorios', 'error');
  return  
}


  const user: User = {
    name: this.name,
    email: this.email,
    password: this.password,

  }


   this._userService.register(user).subscribe({
    next: (v) => {
      console.log(v)
      Swal.fire('Registro exitoso', `Usuario ${this.name} creado exitosamente!`, 'success')
      this.router.navigate(['/login'])
    },
    error: (e: HttpErrorResponse) => {
      if (e.error && e.error.error) {
        Swal.fire('Error', e.error.error, 'error'); // Muestra el mensaje de error con SweetAlert
      } else {
        Swal.fire('Error', 'Error desconocido', 'error'); // Mensaje de error genérico
      }
    }
  })

}}