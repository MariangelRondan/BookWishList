import {config} from 'dotenv';

if(process.env.NODE_ENV !== 'production'){
    config();
}



export class Validators {

  
    static get email() {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    } 
  
    static get passwordContainsLetter(){
      return /[a-zA-Z]/;  
  }

  static get passwordContainsNumber(){
    return  /\d/;
}

}



export const PORT = process.env.PORT;
export const CONNECTION_STRING = process.env.CONNECTION_STRING;