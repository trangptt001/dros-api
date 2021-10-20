import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/module/user/user.interface';
import { UserService } from 'src/module/user/user.service';
import { JwtPayload, Payload } from './auth.interface';
import { CreateUserDto, CreateUserResponseDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private user: UserService) {}

  public async validateUser(
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.user.findOne(username);

    if (user && user.password === password) {
      const result = {
        id: user.id,
        name: user.username,
        email: user.email,
        roles: user.roles.map((el) => el.id),
      };
      return result;
    }

    return null;
  }
  public signJwt(user: Payload): { access_token: string } {
    const payload: JwtPayload = {
      sub: user.userId,
      username: user.username,
      roles: user.roles,
    };

    return {
      access_token: this.jwt.sign(payload),
    };
  }

  public signup(user: CreateUserDto): CreateUserResponseDto {
    const payload = {
      username: user.username,
      email: user.email,
      roles: user.roles,
      phonenumber: user.phonenumber,
    };

    const access_token = this.jwt.sign(payload, {secret: ""})
    const data = await this.user.createOne({ ...user });
  }
}
