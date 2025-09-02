import { Body, Controller, Patch } from "@nestjs/common";
import { UpdateUserDto } from "src/dto/user/update-user.dto";
import { UpdateUserService } from "src/services/users/update-user.service";

@Controller()
export class UpdateUserController {
    constructor(private readonly updateUserService: UpdateUserService) {}

    @Patch('/users/update')
    async handle(@Body() data: UpdateUserDto) {
        return await this.updateUserService.execute(data);
    }   
}