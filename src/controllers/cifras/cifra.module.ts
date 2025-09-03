import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cifra } from 'src/models/cifra.model';
import { CifraController } from './cifra-upload.controller';
import { CifraListService } from 'src/services/cifras/cifra-list.service';
import { CifraDownloadController } from './cifra-download.controller';
import { CifraListController } from './cifra-list.controller';
import { CifraDownloadService } from 'src/services/cifras/cifra-download.service';
import { CifraUploadService } from 'src/services/cifras/cifra-upload.service';

@Module({
  imports: [SequelizeModule.forFeature([Cifra])],
  providers: [CifraListService, CifraDownloadService, CifraUploadService],
  controllers: [CifraController, CifraDownloadController, CifraListController],
})
export class CifraModule {}
