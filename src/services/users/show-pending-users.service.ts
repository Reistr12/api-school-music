import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "src/models/user.model";

@Injectable()
export class ShowPendingUsersService {
    constructor(@InjectModel(User) private userModel: typeof User){}
    async execute () {
        const users = await this.userModel.findAll({ where: { status: 'PENDING' } });
        return users;
    }

}