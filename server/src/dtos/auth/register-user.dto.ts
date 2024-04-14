import { Validators } from "../../config";
import { User } from "../../interfaces/interface";


export class RegisterUserDto{

    private constructor(
        public name: string,
        public email: string,
        public password: string
        
    ){}


    static create(object: User): [string?, RegisterUserDto?]{

        const{name, email, password} = object;

        if(!name) return ["Missing name"]
        if(!email) return ["Missing email"]
        if(!Validators.email.test(email)) return ["Email not valid"]
        if(!password) return ["Missing password"]
        if(password.length < 6) return ["Password too short"]
        if(!Validators.passwordContainsLetter.test(password)) return ["Password must contain letters"]
        if(!Validators.passwordContainsNumber.test(password)) return ["Password must contain a number"]

        return [
            undefined,
            new RegisterUserDto(name, email, password)
        ]


    }


}