import { Body, Controller, Get } from "@nestjs/common";
import { ShowUserByUsernameService} from "src/services/users/show-user-by-username.service";

@Controller('users')
export class ShowUserByUsernameController {

    constructor(private readonly showUserByUsernameUseCase: ShowUserByUsernameService) {}
    
    @Get(':username')
    async handle(@Body('username') username: string) {
        const user = await this.showUserByUsernameUseCase.execute(username);
        return user;
    }
};