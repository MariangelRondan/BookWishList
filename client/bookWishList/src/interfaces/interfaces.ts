export interface Book {
    _id: string,
    name: string;
    author: string;
    description: string;
    status: 'read' | 'not_read';
    owner?: string | null;
}

export interface LoginResponse {
    token: string;
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