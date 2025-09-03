import { Controller, Post, UseInterceptors, UploadedFile, Body, Get, Param, Res, HttpException, Header, StreamableFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CifraUploadService } from 'src/services/cifras/cifra-upload.service';

@Controller('cifras')
export class CifraController {
  constructor(private readonly cifraService: CifraUploadService) {}

  // Upload de cifra
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: (req, file, callback) => {
      if (file.mimetype !== 'application/pdf') {
        return callback(new Error('Apenas PDFs são permitidos'), false);
      }
      callback(null, true);
    },
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    }
  }))
  async handle(
    @UploadedFile() file: Express.Multer.File,
    @Body('title') title: string,
    @Body('composer') composer: string,
    @Body('instrumentation') instrumentation: string,
  ) {
    if (!file) {
      throw new HttpException('Arquivo não enviado', 400);
    }
  
    // Validar se o arquivo é um PDF
    if (file.mimetype !== 'application/pdf') {
      throw new HttpException('Apenas arquivos PDF são permitidos', 400);
    }
  
    try {
      const cifra = await this.cifraService.uploadCifra({
        title,
        composer,
        instrumentation,
        file: file.buffer,
      });
  
      return {
        message: 'Cifra enviada com sucesso',
        id: cifra.id,
        title: cifra.title
      };
    } catch (error) {
      throw new HttpException('Erro ao salvar cifra', 500);
    }
  }

}
