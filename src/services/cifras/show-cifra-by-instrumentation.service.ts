import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Cifra } from "src/models/cifra.model";

@Injectable()
export class ShowCifraByInstrumentationService {
    constructor(@InjectModel(Cifra) private cifraModel: typeof Cifra) {}
    async execute(instrumentation: string) {
        return this.cifraModel.findAll({ where: { instrumentation } });
    }
}