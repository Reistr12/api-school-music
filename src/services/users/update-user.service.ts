import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UpdateUserDto } from "src/dto/user/update-user.dto";
import { User } from "src/models/user.model";

@Injectable()
export class UpdateUserService {
    constructor(@InjectModel(User) private userModel: typeof User){}
    async execute (data: UpdateUserDto, id: number) {
        const updatedUser = await this.userModel.update(data, { where: { id: id }, returning: true });
        return updatedUser;
    }

}