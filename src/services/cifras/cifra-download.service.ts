import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cifra } from 'src/models/cifra.model';

@Injectable()
export class CifraDownloadService {
  constructor(@InjectModel(Cifra) private cifraModel: typeof Cifra) {}

  async findOne(id: number) {
    const cifra = await this.cifraModel.findByPk(id);
    if (!cifra) throw new Error('Cifra não encontrada');
    
    // Verifica se o buffer do arquivo está intacto
    if (!cifra.file || cifra.file.length === 0) {
      throw new Error('Arquivo corrompido ou vazio');
    }
    
    return cifra;
  }
}
