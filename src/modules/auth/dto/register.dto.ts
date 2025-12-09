import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    contrasena: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsOptional()
    @IsString()
    direccion?: string;

    @IsOptional()
    @IsString()
    ciudad?: string;

    @IsOptional()
    @IsString()
    pais?: string;

    @IsOptional()
    @IsString()
    codigoPostal?: string;
}
