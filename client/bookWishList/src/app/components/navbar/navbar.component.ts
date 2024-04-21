import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog   } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

constructor(
  private router: Router,
  public dialog: MatDialog
){}

logOut(){
localStorage.removeItem('token');
localStorage.removeItem('User');

this.router.navigate(['/login'])
return
}


}
