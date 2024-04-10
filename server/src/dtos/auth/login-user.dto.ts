import { Validators } from "../../config";
import { LoginObject } from "../../interfaces/interface";


export class LoginUserDto{
 private constructor( 
    public email: string,
    public password: string){}


static create(object: LoginObject): [string?, LoginUserDto?]{

const {email, password} = object;


if(!email) return ["Missing email"]
if(!Validators.email.test(email)) return ["Email not valid"]
if(!password) return ["Missing password"]
if(password.length < 6) return ["Password too short"]
if(!Validators.passwordContainsLetter.test(password)) return ["Password must contain letters"]
if(!Validators.passwordContainsNumber.test(password)) return ["Password must contain a number"]


return [
    undefined, 
    new LoginUserDto(email,password)
];

}


}