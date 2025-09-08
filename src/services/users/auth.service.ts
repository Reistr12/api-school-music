import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { LoginUserDto } from "src/dto/user/login-user.dto";
import { User } from "src/models/user.model";
import * as bcrypt from 'bcrypt';

export enum UserStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

@Injectable()
export class AuthService {
    constructor(@InjectModel(User) private userModel: typeof User){}

    async execute (data: LoginUserDto) {
        const user = await this.userModel.findOne({ where: { email: data.email} });

        if(!user) {
            throw new HttpException('User not found', 404);
        }

        
        if(!await bcrypt.compare(data.password, user.password)) {
            throw new HttpException('Invalid credentials', 400);
        }

        const status = user.status

        if(status !== UserStatus.APPROVED) {
            throw new HttpException('User not approved', 403);
        }

        return user;
    }

}