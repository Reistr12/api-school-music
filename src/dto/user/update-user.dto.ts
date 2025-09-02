import { IsOptional, IsString, IsArray } from "class-validator";

export class UpdateUserDto {
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    instruments?: string[];

    @IsString()
    @IsOptional()
    password?: string;
}
