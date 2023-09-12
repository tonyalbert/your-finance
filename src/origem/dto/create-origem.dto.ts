import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateOrigemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUUID()
    @IsNotEmpty()
    userId: string;
}
