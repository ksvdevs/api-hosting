import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';
import { CreatePlanDto, UpdatePlanDto } from './dto';

@Injectable()
export class PlansService {
    constructor(
        @InjectRepository(Plan)
        private readonly planRepository: Repository<Plan>,
    ) { }

    async create(createPlanDto: CreatePlanDto): Promise<Plan> {
        const plan = this.planRepository.create(createPlanDto);
        return await this.planRepository.save(plan);
    }

    async findAll(): Promise<Plan[]> {
        return await this.planRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    async findAllActive(): Promise<Plan[]> {
        return await this.planRepository.find({
            where: { activo: true },
            order: { precioMensual: 'ASC' },
        });
    }

    async findOne(id: string): Promise<Plan> {
        const plan = await this.planRepository.findOne({ where: { id } });
        if (!plan) {
            throw new NotFoundException(`Plan con ID "${id}" no encontrado`);
        }
        return plan;
    }

    async update(id: string, updatePlanDto: UpdatePlanDto): Promise<Plan> {
        const plan = await this.findOne(id);
        Object.assign(plan, updatePlanDto);
        return await this.planRepository.save(plan);
    }

    async remove(id: string): Promise<void> {
        const plan = await this.findOne(id);
        await this.planRepository.remove(plan);
    }

    async toggleActive(id: string): Promise<Plan> {
        const plan = await this.findOne(id);
        plan.activo = !plan.activo;
        return await this.planRepository.save(plan);
    }
}
