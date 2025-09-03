import { Controller, Get, HttpException, Param, Res } from "@nestjs/common";
import { CifraDownloadService } from "src/services/cifras/cifra-download.service";

@Controller('cifras')
export class CifraDownloadController {
    constructor(private readonly cifraService: CifraDownloadService) {}

    // Download direto como resposta HTTP
      @Get('download/:id')
      async handle(@Param('id') id: string, @Res({ passthrough: true }) res) {
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
    
}