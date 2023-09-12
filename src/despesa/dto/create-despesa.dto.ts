import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateDespesaDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    value: number;

    @IsBoolean()
    @IsNotEmpty()
    fixo: boolean;

    @IsUUID()
    @IsNotEmpty()
    userId: string

    @IsUUID()
    @IsNotEmpty()
    origemId: string
}
