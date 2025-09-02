import { Injectable } from "@nestjs/common";

@Injectable()
export class ShowUserByUsernameService {
    async execute(username: string) {
        const user = {id: 1, username: username, name: "John Doe"}
        return user; 
    };
}