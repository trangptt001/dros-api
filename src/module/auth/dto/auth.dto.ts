import { IsArray, IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phonenumber: string;

    @IsArray()
    roles: string[];
}

export class SignInDto {
    username: string;
    password: string;
}

export class LoginResponseDto {
    access_token: string;
    refresh_token: string;
    constructor(access_token: string, refresh_token: string){
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }
}


export class CreateUserResponseDto extends CreateUserDto {
    access_token: string;
    refresh_token: string;
}
