import { Body, Controller, Post } from "@nestjs/common";
import { LoginUserDto } from "src/dto/user/login-user.dto";
import { AuthService } from "src/services/users/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post('/login')
    async handle(@Body() data: LoginUserDto) {
        return await this.authService.execute(data);
    }
}