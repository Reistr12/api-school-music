import { Body, Controller } from "@nestjs/common";
import { FilterCifraDto } from "src/dto/cifras/filter-cifra.dto";
import { ShowCifraByInstrumentationService } from "src/services/cifras/show-cifra-by-instrumentation.service";

@Controller('cifras')
export class ShowCifraByInstrumentationController {
    constructor(private readonly showCifraByInstrumentation: ShowCifraByInstrumentationService) {}
    async hande(@Body() filter: FilterCifraDto) {
        return this.showCifraByInstrumentation.execute(filter.instrumentation); 
    }
}
