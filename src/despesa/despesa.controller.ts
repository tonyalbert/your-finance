import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { UUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post()
  create(@Body() createDespesaDto: CreateDespesaDto, @Req() request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const payload = this.despesaService.extractPayload(token);
    const userId = payload.sub

    return this.despesaService.create(createDespesaDto, userId);	
  }

  @Get()
  findAll(@Req() request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const payload = this.despesaService.extractPayload(token);
    const userId = payload.sub

    return this.despesaService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.despesaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDespesaDto: UpdateDespesaDto) {
    return this.despesaService.update(+id, updateDespesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.despesaService.remove(id);
  }
}
