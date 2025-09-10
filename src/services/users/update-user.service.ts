import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UpdateUserDto } from "src/dto/user/update-user.dto";
import { User } from "src/models/user.model";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserService {
    constructor(@InjectModel(User) private userModel: typeof User){}
    
    async execute(data: UpdateUserDto) {  
        const user = await this.userModel.findOne({where: {email: data.email}}) 
        if(!user || !(await bcrypt.compare(data.currentPassword, user.password))) {
            throw new UnauthorizedException('Senha atual incorreta');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        const { currentPassword, ...updateData } = data;
        return await this.userModel.update(updateData, { where: { email: data.email }, returning: true });
    }
}