import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class signInDto {
    @IsNotEmpty()
    @IsEmail()
    email

    @IsNotEmpty()
    @IsString()
    password
}
