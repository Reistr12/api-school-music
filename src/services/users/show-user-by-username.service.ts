import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "src/models/user.model";

@Injectable()
export class ShowUserByUsernameService {
    constructor(@InjectModel(User) private userModel: typeof User){}

    async execute(name: string) {
        const user = await this.userModel.findOne({ where: { name } });
        return user;
    };
}