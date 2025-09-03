import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cifra } from 'src/models/cifra.model';

@Injectable()
export class CifraListService {
  constructor(@InjectModel(Cifra) private cifraModel: typeof Cifra) {}

  async execute() {
    return this.cifraModel.findAll();
  }
}
