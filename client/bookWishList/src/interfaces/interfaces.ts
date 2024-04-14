export interface Book {
    id: string,
    name: string;
    author: string;
    read: boolean;
}



export interface User{
    name: string;
    email: string;
    password: string;
    img?: string;
}

export interface LoginUser{
    email: string;
    password: string;
}