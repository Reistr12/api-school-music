import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "src/services/users/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('/login')
    async handle(@Body() body: {email: string, password: string}) {
        return await this.authService.execute(body);
    }
}