import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import prisma from 'src/prisma/Prisma';
import { UUID } from 'crypto';

@Injectable()
export class DespesaService {
  async create(createDespesaDto: CreateDespesaDto) {

    const despesa = await prisma.despesa.create({
      data: {
        name: createDespesaDto.name,
        description: createDespesaDto.description,
        value: createDespesaDto.value,
        fixo: createDespesaDto.fixo,
        userId: createDespesaDto.userId,
        origemId: createDespesaDto.origemId
      }
    })

    return despesa;
  }

  findAll() {
    const despesas = prisma.despesa.findMany();
    return despesas;
  }

  findOne(id: UUID) {
    const despesa = prisma.despesa.findUnique({
      where: {
        id: id
      }
    })
    return despesa;
  }

  update(id: number, updateDespesaDto: UpdateDespesaDto) {
    return `This action updates a #${id} despesa`;
  }

  remove(id: UUID) {
    const despesa = prisma.despesa.delete({
      where: {
        id: id
      }
    })
    return despesa;
  }
}
