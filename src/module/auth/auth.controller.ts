import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { ErrorResponse } from 'src/shared/class/error-response';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginResponseDto, SignInDto } from './dto/auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'register new account' })
  async signup(@Body() model: CreateUserDto) {
    try {
      const result = await this.auth.signup(model);
      return result;
    } catch (error) {
      return new BadRequestException(
        new ErrorResponse(500, error.message, 'MSE00'),
      );
    }
  }

  @Post('/signin')
  @ApiOperation({ summary: 'login into the system' })
  @UseGuards(AuthGuard('local'))
  async signin(@Body() model: SignInDto) {
    try {
      const user = await this.auth.validateUser(model.username, model.password);
      if (user) {
        const token = this.auth.signJwt(user);
        return { ...user, token };
      } else {
        return new NotFoundException(
          new ErrorResponse(
            400,
            'Không tìm thấy tài khoản trùng khớp',
            'MSE001',
          ),
        );
      }
    } catch (error) {
      return new BadRequestException(
        new ErrorResponse(500, error.message, 'MSE00'),
      );
    }
  }
}
