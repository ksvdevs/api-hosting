import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('planes')
export class Plan {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    nombre: string;

    @Column({ name: 'precio_mensual', type: 'numeric', precision: 10, scale: 2 })
    precioMensual: number;

    @Column({ type: 'text', nullable: true })
    almacenamiento: string;

    @Column({ name: 'ancho_banda', type: 'text', nullable: true })
    anchoBanda: string;

    @Column({ type: 'int4', default: 1 })
    dominios: number;

    @Column({ name: 'cuentas_email', type: 'int4', default: 1 })
    cuentasEmail: number;

    @Column({ name: 'tipo_soporte', type: 'text', nullable: true })
    tipoSoporte: string;

    @Column({ name: 'certificado_ssl', type: 'boolean', default: false })
    certificadoSsl: boolean;

    @Column({ name: 'backup_diario', type: 'boolean', default: false })
    backupDiario: boolean;

    @Column({ name: 'plan_destacado', type: 'boolean', default: false })
    planDestacado: boolean;

    @Column({ type: 'boolean', default: true })
    activo: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Date;
}
