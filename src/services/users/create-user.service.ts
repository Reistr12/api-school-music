import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { User } from "src/models/user.model";

@Injectable()
export class CreateUserService {
    constructor(@InjectModel(User) private userModel: typeof User){}
    async execute(data: CreateUserDto) {
        const instruments = ['guitar', 'bass', 'drums', 'vocals']
        const allValid = data.instruments.every((inst) => instruments.includes(inst));

        if (!allValid) {
          throw new HttpException('Instrument not found', 400);
        }

        return await this.userModel.create(data);
    }
}