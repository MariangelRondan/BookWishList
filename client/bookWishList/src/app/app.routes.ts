import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './utils/Auth.guard';
import { BookFormComponent } from './components/book-form/book-form.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'register', component: RegisterComponent,

    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'

    },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard]

    },
    {
        path: 'bookForm', component: BookFormComponent, canActivate: [AuthGuard]

    },
    
    {
        path: '**', redirectTo:'login', pathMatch:'full'
    }
   
];
