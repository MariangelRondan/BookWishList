import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginUser, User } from "../../interfaces";
import { Observable } from "rxjs";



@Injectable({
providedIn: 'root'
})

export class UserService{

    errorMessage: string | undefined;

    private APIUrl: string;
 

    constructor(
     private http: HttpClient){
        this.APIUrl= 'http://localhost:3001/auth';

        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register(user: User): Observable<any>  {  //CREEEEO... me dio error de tipo de dato, puede fallar-
        return this.http.post(`${this.APIUrl}/register`, user);

    }


    login(user: LoginUser): Observable<string>{
        return this.http.post<string>(`${this.APIUrl}/login`, user);

    }

}