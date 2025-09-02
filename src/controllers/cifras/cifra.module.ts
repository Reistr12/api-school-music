import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cifra } from 'src/models/cifra.model';
import { CifraController } from './cifra.controller';
import { CifraService } from 'src/services/cifras/cifra.service';

@Module({
  imports: [SequelizeModule.forFeature([Cifra])],
  providers: [CifraService],
  controllers: [CifraController],
})
export class CifraModule {}
