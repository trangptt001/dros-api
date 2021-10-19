import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/shared/pipe/validation.pipe';
import { CreateUserDto } from './dto/createuser.dto';

@Controller('auth')
export class AuthController {
    @Post("signup")
    async signup(@Body() model: CreateUserDto){
        console.log(model,"CreateUserDto")
    }
}
