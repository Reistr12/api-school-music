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
import { ChangeUserStatusController } from "./change-user-status.controller";
import { ChangeUserStatusService } from "src/services/users/change-user-status.service";
import { ShowPendingUsersController } from "./show-pending-users.controller";
import { ShowPendingUsersService } from "src/services/users/show-pending-users.service";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: 
    [
        CreateUserController, 
        ShowUsersController, 
        AuthController, 
        ShowUserByUsernameController, 
        UpdateUserController,
        ChangeUserStatusController,
        ShowPendingUsersController
    ],
    providers: 
    [
        CreateUserService, 
        ShowUsersService, 
        AuthService, 
        ShowUserByUsernameService, 
        UpdateUserService,
        ChangeUserStatusService,
        ShowPendingUsersService,
    ],
    exports: []
})
export class UserModule {}