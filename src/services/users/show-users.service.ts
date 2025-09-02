import { Injectable } from "@nestjs/common";

@Injectable()
export class ShowUsersService {
    async listUsers() {
        const users = [
            {nome: 'Gabriel', email: 'gabriel@example.com'}, 
            {nome: 'João', email: 'joao@example.com'}, 
            {nome: 'Maria', email: 'maria@example.com'}]
        return users;
    }

}