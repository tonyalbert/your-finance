import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrigemService } from './origem.service';
import { CreateOrigemDto } from './dto/create-origem.dto';
import { UpdateOrigemDto } from './dto/update-origem.dto';
import { UUID } from 'crypto';

@Controller('origem')
export class OrigemController {
  constructor(private readonly origemService: OrigemService) {}

  @Post()
  create(@Body() createOrigemDto: CreateOrigemDto) {
    return this.origemService.create(createOrigemDto);
  }

  @Get()
  findAll() {
    return this.origemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.origemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrigemDto: UpdateOrigemDto) {
    return this.origemService.update(+id, updateOrigemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.origemService.remove(id);
  }
}
