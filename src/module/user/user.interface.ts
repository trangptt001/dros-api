export interface User {
    id: string;
    name: string;
    email: string;
    roles: string[];
}
  
export interface UserSignUp {
    username: string;
    password: string;
    email: string;
    roles: string[]
}