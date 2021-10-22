import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/module/user/user.interface';
import { UserService } from 'src/module/user/user.service';
import { JwtPayload, Payload } from './auth.interface';
import {
  CreateUserDto,
  CreateUserResponseDto,
  LoginResponseDto,
} from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private user: UserService,
    private configService: ConfigService,
  ) {}

  public async validateUser(
    username: string,
    password: string,
  ): Promise<User | null> {
    try {
      const user = await this.user.findOne(username);
      if (user && bcrypt.compare(user.password, password)) {
        const result = {
          id: user.id,
          name: user.username,
          email: user.email,
          roles: user.roles,
        };
        return result;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  public signJwt(user: User): LoginResponseDto {
    const payload: JwtPayload = {
      sub: user.id,
      username: user.name,
      roles: user.roles,
    };
    const access_token = this.jwt.sign(payload, {
      secret: this.configService.get<string>('secretKey'),
    });
    const refresh_token = this.jwt.sign(payload, {
      secret: this.configService.get<string>('secretKeyRefresh'),
    });
    return new LoginResponseDto(access_token, refresh_token);
  }

  public async signup(model: CreateUserDto) {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(model.password, saltOrRounds);
      const today = new Date();

      // const result = this.user.createOne({
      //   ...model,
      //   password: hash,
      //   refresh_token: this.jwt.sign(model, { secret: '22222222' }),
      //   is_active: true,
      //   time_password_expired: new Date(
      //     today.getTime() + 2 * 24 * 60 * 60 * 1000,
      //   ),
      //   id: '',
      // });
      // return { result };
    } catch (error) {
      throw error;
    }
  }
}
