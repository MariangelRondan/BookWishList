import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginUser, User,LoginResponse } from "../../interfaces";
import { Observable } from "rxjs";
import { environments } from "../../environments/environments";



@Injectable({
providedIn: 'root'
})

export class UserService{

    errorMessage: string | undefined;

    private APIUrl: string;
 

    constructor(
     private http: HttpClient){
        this.APIUrl= `${environments.BACKURL}/auth`;
        

        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register(user: User): Observable<any>  {  //CREEEEO... me dio error de tipo de dato, puede fallar-
        return this.http.post(`${this.APIUrl}/register`, user);

    }


    login(user: LoginUser): Observable<LoginResponse>{
        return this.http.post<LoginResponse>(`${this.APIUrl}/login`, user);

    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
      }

}