import { IsEmail, IsString, IsStrongPassword, min } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;


    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 2,
        minSymbols: 1,
    })
    password: string;

    @IsString({each: true})
    instruments : string[];
}