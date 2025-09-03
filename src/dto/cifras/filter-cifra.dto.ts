import { IsString } from "class-validator";

export class FilterCifraDto {
    @IsString()
    instrumentation: string;
}