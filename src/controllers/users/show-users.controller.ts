import { Controller, Get } from "@nestjs/common";
import { ShowUsersService } from "src/services/users/show-users.service";

@Controller('users')
export class ShowUsersController {
    constructor(private readonly showUsersService: ShowUsersService) {}
    @Get('list')
    async handle() {
        return await this.showUsersService.listUsers()
    }
}