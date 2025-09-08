import { Body, Controller, Patch } from "@nestjs/common";
import { ChangeUserStatusService } from "src/services/users/change-user-status.service";

@Controller('users')
export class ChangeUserStatusController {
    constructor(private readonly changeUserStatusService: ChangeUserStatusService) {}

    @Patch('update-status')
    async changeStatus(@Body('status') status: string, @Body('email') email: string) {
        return this.changeUserStatusService.execute(email, status);
    }
}