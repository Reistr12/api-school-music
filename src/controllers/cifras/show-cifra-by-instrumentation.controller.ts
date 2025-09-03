import { Body, Controller } from "@nestjs/common";

@Controller('cifras')
export class ShowCifraByInstrumentationController {
    constructor(private readonly cifraService) {}
    async hande(@Body() filters) {
        
    }
}
