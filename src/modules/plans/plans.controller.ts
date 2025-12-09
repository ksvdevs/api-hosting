import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseUUIDPipe,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto, UpdatePlanDto } from './dto';

@Controller('plans')
export class PlansController {
    constructor(private readonly plansService: PlansService) { }

    @Post()
    create(@Body() createPlanDto: CreatePlanDto) {
        return this.plansService.create(createPlanDto);
    }

    @Get()
    findAll() {
        return this.plansService.findAll();
    }

    @Get('active')
    findAllActive() {
        return this.plansService.findAllActive();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.plansService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updatePlanDto: UpdatePlanDto,
    ) {
        return this.plansService.update(id, updatePlanDto);
    }

    @Patch(':id/toggle-active')
    toggleActive(@Param('id', ParseUUIDPipe) id: string) {
        return this.plansService.toggleActive(id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.plansService.remove(id);
    }
}
