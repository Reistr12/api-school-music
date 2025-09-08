import { Controller, Get } from "@nestjs/common";
import { ShowPendingUsersService } from "src/services/users/show-pending-users.service";

@Controller('users')
export class ShowPendingUsersController {
    constructor(private showPendingUsersService: ShowPendingUsersService) {}

    @Get('pending')
    async showPendingUsers() {
        return this.showPendingUsersService.execute();
    }
}