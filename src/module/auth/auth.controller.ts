import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipe/validation.pipe';

@Controller('auth')
export class AuthController {
    @Post("signup")
    async signup(@Body() model: ){
        console.log(model,"CreateUserDto")
    }
}
