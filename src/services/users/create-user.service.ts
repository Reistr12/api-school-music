import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/dto/user/create-user.dto";

@Injectable()
export class CreateUserService {
    async execute(data: CreateUserDto) {
        return { message: 'User created successfully', data };
    }
}