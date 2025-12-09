import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    nombre: string;

    @Column({ type: 'text', unique: true })
    email: string;

    @Column({ type: 'text' })
    contrasena: string;

    @Column({ type: 'text', default: 'cliente' })
    rol: string;

    @Column({ type: 'text', nullable: true })
    telefono: string;

    @Column({ type: 'text', nullable: true })
    direccion: string;

    @Column({ type: 'text', nullable: true })
    ciudad: string;

    @Column({ type: 'text', nullable: true })
    pais: string;

    @Column({ name: 'codigo_postal', type: 'text', nullable: true })
    codigoPostal: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Date;
}
