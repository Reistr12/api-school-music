import { Controller, Get } from "@nestjs/common";
import { CifraListService } from "src/services/cifras/cifra-list.service";

@Controller('cifras')
export class CifraListController {
    constructor(private readonly cifraListService: CifraListService) {}
    @Get('list')
    async handle() {
      return this.cifraListService.listAll();
    }
}