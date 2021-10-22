import { Role } from 'src/entity/role.entity';

export interface User {
  id: string;
  name: string;
  email: string;
  roles: Role[];
}

export interface UserSignUp {
  username: string;
  password: string;
  email: string;
  roles: string[];
}
