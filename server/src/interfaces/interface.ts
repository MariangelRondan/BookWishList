export interface User {
    id: string,
    name: string;
    email: string;
    password: string;
    img?: string| null | undefined;
    role?: string[]
}


export interface LoginObject{
    email: string;
    password: string;
}