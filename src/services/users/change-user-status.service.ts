import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User, UserStatus } from "src/models/user.model";

@Injectable()
export class ChangeUserStatusService {
    constructor(@InjectModel(User) private userModel: typeof User){}

    async execute (email, status: string) {
        if(status.toLowerCase() === UserStatus.APPROVED) {
            const updatedUser = await this.userModel.update({ status: UserStatus.APPROVED }, { where: { email }, returning: true });
            return updatedUser;
        }else if(status.toLowerCase() === UserStatus.REJECTED) {
            const updatedUser = await this.userModel.update({ status: UserStatus.REJECTED }, { where: { email }, returning: true });
            this.userModel.destroy({ where: { email } });
            return updatedUser;
        }

        throw new HttpException('Invalid status', 400);

    }
}