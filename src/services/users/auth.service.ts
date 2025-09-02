import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    async execute (data: {email: string, password: string}) {
        return {message: 'Login realizado com sucesso!', data: data};
    }

}