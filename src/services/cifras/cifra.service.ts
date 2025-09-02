import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as fs from 'fs';
import { Cifra } from 'src/models/cifra.model';

@Injectable()
export class CifraService {
  constructor(@InjectModel(Cifra) private cifraModel: typeof Cifra) {}

  // Upload da cifra
  async uploadCifra(data: { title: string; composer: string; instrumentation: string; file: Buffer }) {
    return await this.cifraModel.create({
      title: data.title,
      composer: data.composer,
      instrumentation: data.instrumentation,
      file: data.file,
    });
  }
  

  // Download da cifra
  async findOne(id: number) {
    const cifra = await this.cifraModel.findByPk(id);
    if (!cifra) throw new Error('Cifra não encontrada');
    
    // Verifica se o buffer do arquivo está intacto
    if (!cifra.file || cifra.file.length === 0) {
      throw new Error('Arquivo corrompido ou vazio');
    }
    
    return cifra;
  }

  // Listar todas as cifras
  async listAll() {
    return this.cifraModel.findAll({ attributes: ['id', 'title', 'createdAt'] });
  }
}
