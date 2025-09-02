import { Module } from "@nestjs/common";
import { CreateUserController } from "src/controllers/users/create-user.controller";
import { CreateUserService } from "src/services/users/create-user.service";
import { ShowUsersController } from "src/controllers/users/show-users.controller";
import { ShowUsersService } from "src/services/users/show-users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "src/services/users/auth.service";
import { ShowUserByUsernameController } from "./show-user-by-username.controller";
import { UpdateUserController } from "./update-user.controller";
import { ShowUserByUsernameService } from "src/services/users/show-user-by-username.service";
import { UpdateUserService } from "src/services/users/update-user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/models/user.model";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: 
    [
        CreateUserController, 
        ShowUsersController, 
        AuthController, 
        ShowUserByUsernameController, 
        UpdateUserController
    ],
    providers: 
    [
        CreateUserService, 
        ShowUsersService, 
        AuthService, 
        ShowUserByUsernameService, 
        UpdateUserService],
    exports: []
})
export class UserModule {}