import { IsArray, IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phonenumber;

    @IsArray()
    roles;
}

export class CreateUserResponseDto extends CreateUserDto {
    access_token: string;

    refresh_token: string;
}