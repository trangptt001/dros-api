import { Role } from 'src/entity/role.entity';

export interface JwtPayload {
  sub: string;
  username: string;
  roles: Role[];
}

export interface Payload {
  userId: string;
  username: string;
  roles: string[];
}
