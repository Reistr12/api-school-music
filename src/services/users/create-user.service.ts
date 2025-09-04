import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "src/dto/user/create-user.dto";
import { User } from "src/models/user.model";

@Injectable()
export class CreateUserService {
    constructor(@InjectModel(User) private userModel: typeof User){}
    async execute(data: CreateUserDto) {
        const userAlreadyExists = await this.userModel.findOne({ where: { email: data.email } });
        if (userAlreadyExists) {
            throw new HttpException('User already exists', 400);
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.userModel.create({ ...data, password: hashedPassword });
        return user;
    }
}