import { Controller, Post, UseInterceptors, UploadedFile, Body, Get, Param, Res, HttpException, Header, StreamableFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CifraService } from 'src/services/cifras/cifra.service';
import { Readable } from 'stream';

@Controller('cifras')
export class CifraController {
  constructor(private readonly cifraService: CifraService) {}

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
  async upload(
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

  // Download direto como resposta HTTP
  @Get('download/:id')
  async download(@Param('id') id: string, @Res({ passthrough: true }) res) {
      const cifra = await this.cifraService.findOne(+id);
      if (!cifra) {
        throw new HttpException('Cifra não encontrada', 404);
      }
  
      // Configura os headers CORRETAMENTE
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${cifra.title}.pdf"`, // Usa o título real
        'Content-Length': cifra.file.length, //  Tamanho do buffer é importante
      });
  
      // Envia o buffer diretamente
      res.send(cifra.file);
  }

  // Listar cifras
  @Get('list')
  async list() {
    return this.cifraService.listAll();
  }
}
