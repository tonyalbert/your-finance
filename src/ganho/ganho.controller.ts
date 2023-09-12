import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GanhoService } from './ganho.service';
import { CreateGanhoDto } from './dto/create-ganho.dto';
import { UpdateGanhoDto } from './dto/update-ganho.dto';

@Controller('ganho')
export class GanhoController {
  constructor(private readonly ganhoService: GanhoService) {}

  @Post()
  create(@Body() createGanhoDto: CreateGanhoDto) {
    return this.ganhoService.create(createGanhoDto);
  }

  @Get()
  findAll() {
    return this.ganhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ganhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGanhoDto: UpdateGanhoDto) {
    return this.ganhoService.update(+id, updateGanhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ganhoService.remove(+id);
  }
}
