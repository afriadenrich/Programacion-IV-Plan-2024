/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
    
    @IsNotEmpty()
    @IsString()
    apellido: string;
    
    @IsNotEmpty()
    @IsNumberString()
    edad: number;
    
    @IsNotEmpty()
    @IsNumberString()
    dni: number
}
