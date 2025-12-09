import {
    IsNotEmpty,
    IsString,
    IsNumber,
    IsOptional,
    IsBoolean,
    IsInt,
    Min,
} from 'class-validator';

export class CreatePlanDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    precioMensual: number;

    @IsOptional()
    @IsString()
    almacenamiento?: string;

    @IsOptional()
    @IsString()
    anchoBanda?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    dominios?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    cuentasEmail?: number;

    @IsOptional()
    @IsString()
    tipoSoporte?: string;

    @IsOptional()
    @IsBoolean()
    certificadoSsl?: boolean;

    @IsOptional()
    @IsBoolean()
    backupDiario?: boolean;

    @IsOptional()
    @IsBoolean()
    planDestacado?: boolean;

    @IsOptional()
    @IsBoolean()
    activo?: boolean;
}
