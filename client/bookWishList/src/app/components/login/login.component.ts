import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginUser } from '../../../interfaces';
import { UserService } from '../../services/user.services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string = '';
password: string = '';

constructor(
private _userService: UserService,
private router: Router
){}

login(){
  if(this.email === '' || this. password===''){
    Swal.fire('Campos obligatorios', 'Todos los campos son obligatorios', 'error');
  return  
}

const user: LoginUser = {
  email: this.email,
  password: this.password
}


this._userService.login(user).subscribe({
  next: (data)=> {
    this.router.navigate(['/home'])
    console.log(data)
    localStorage.setItem('token', data.token)
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
