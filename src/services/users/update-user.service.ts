import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "src/dto/user/update-user.dto";

@Injectable()
export class UpdateUserService {
    async execute (data: UpdateUserDto) {
        return {message: 'Usuário atualizado com sucesso!', data: data};
    }

}