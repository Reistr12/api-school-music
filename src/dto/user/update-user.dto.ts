import { IsOptional, IsString, IsArray, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    instruments?: string[];

    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsNotEmpty()
    currentPassword: string;

    @IsString()
    email: string
}
