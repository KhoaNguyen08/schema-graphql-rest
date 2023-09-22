// ./user/dto/create-user.dto.ts

import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsEmail()
    readonly email: string;

    // Các trường và validator tùy thuộc vào yêu cầu của bạn
}

export class UpdateUserDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsEmail()
    readonly email: string;

    // Các trường và validator tùy thuộc vào yêu cầu của bạn
}
