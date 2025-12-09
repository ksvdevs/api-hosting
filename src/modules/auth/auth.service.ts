import {
    Injectable,
    UnauthorizedException,
    ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto) {
        // Check if user exists
        const existingUser = await this.usersService.findByEmail(registerDto.email);
        if (existingUser) {
            throw new ConflictException('El email ya está registrado');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(registerDto.contrasena, 10);

        // Create user
        const user = await this.usersService.create({
            ...registerDto,
            contrasena: hashedPassword,
            rol: 'cliente',
        });

        // Generate token
        const token = this.generateToken(user.id, user.email);

        return {
            message: 'Usuario registrado exitosamente',
            user: {
                id: user.id,
                nombre: user.nombre,
                email: user.email,
                rol: user.rol,
            },
            access_token: token,
        };
    }

    async login(loginDto: LoginDto) {
        const user = await this.validateUser(loginDto.email, loginDto.contrasena);

        if (!user) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const token = this.generateToken(user.id, user.email);

        return {
            message: 'Login exitoso',
            user: {
                id: user.id,
                nombre: user.nombre,
                email: user.email,
                rol: user.rol,
            },
            access_token: token,
        };
    }

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.contrasena);

        if (!isPasswordValid) {
            return null;
        }

        return user;
    }

    private generateToken(userId: string, email: string): string {
        const payload = { sub: userId, email };
        return this.jwtService.sign(payload);
    }
}
