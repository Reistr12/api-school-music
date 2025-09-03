import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { CreateUserService } from "src/services/users/create-user.service";

@Controller('users')
export class CreateUserController {
    constructor(private readonly createUserService: CreateUserService) {}

    @Post('create')
    async handle(@Body() data: CreateUserDto) {
        return await this.createUserService.execute(data);
    }
}