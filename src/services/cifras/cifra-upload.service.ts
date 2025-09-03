import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cifra } from 'src/models/cifra.model';

@Injectable()
export class CifraUploadService {
  constructor(@InjectModel(Cifra) private cifraModel: typeof Cifra) {}

  async uploadCifra(data: { title: string; composer: string; instrumentation: string; file: Buffer }) {
    return await this.cifraModel.create({
      title: data.title,
      composer: data.composer,
      instrumentation: data.instrumentation,
      file: data.file,
    });
  }
}
