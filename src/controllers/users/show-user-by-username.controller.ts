import { Controller, Get, Query, NotFoundException } from "@nestjs/common";
import { ShowUserByUsernameService } from "src/services/users/show-user-by-username.service";

@Controller('users')
export class ShowUserByUsernameController {
  constructor(private readonly showUserByUsernameService: ShowUserByUsernameService) {}

  @Get('byname')
  async handle(@Query('name') name: string) {
    const user = await this.showUserByUsernameService.execute(name);
    
    return user;
  }
}
