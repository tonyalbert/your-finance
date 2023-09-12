import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GanhoService } from './ganho.service';
import { CreateGanhoDto } from './dto/create-ganho.dto';
import { UpdateGanhoDto } from './dto/update-ganho.dto';
import { UUID } from 'crypto';

@Controller('ganho')
export class GanhoController {
  constructor(private readonly ganhoService: GanhoService) {}

  @Post()
  create(@Body() createGanhoDto: CreateGanhoDto) {
    return this.ganhoService.create(createGanhoDto);
  }

  @Get()
  findAll(@Body('userId') userId: UUID) {
    return this.ganhoService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.ganhoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGanhoDto: UpdateGanhoDto) {
    return this.ganhoService.update(+id, updateGanhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.ganhoService.remove(id);
  }
}
