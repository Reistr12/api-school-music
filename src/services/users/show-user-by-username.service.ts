import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "src/models/user.model";

@Injectable()
export class ShowUserByUsernameService {
    constructor(@InjectModel(User) private userModel: typeof User){}

    async execute(username: string) {
        const user = await this.userModel.findOne({ where: { name: username } });
        return user;
    };
}