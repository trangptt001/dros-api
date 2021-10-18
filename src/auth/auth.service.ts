import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtPayload, Payload } from './auth.interface';

@Injectable()
export class AuthService {
    constructor(private jwt: JwtService, private user: UserService){}


    public async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.user.findOne(username);
    
        if (user && user.password === password) {
          const result = {id: user.id,
            name: user.user_name,
            email: user.email,
            roles: user.roles.map(el => el.id)
        }
          return result;
        }
    
        return null;
    }
    public signJwt(user: Payload): {access_token: string} {
        const payload: JwtPayload = {sub: user.userId, username: user.username, roles: user.roles};

        return {
            access_token: this.jwt.sign(payload)
        }
    }

}
