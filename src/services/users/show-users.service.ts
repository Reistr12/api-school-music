import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "src/models/user.model";

@Injectable()
export class ShowUsersService {
    constructor(@InjectModel(User) private userModel: typeof User){}
    async listUsers() {
        const users = await this.userModel.findAll();
        return users;
    }

}