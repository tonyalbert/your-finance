import { Injectable } from '@nestjs/common';
import { CreateGanhoDto } from './dto/create-ganho.dto';
import { UpdateGanhoDto } from './dto/update-ganho.dto';
import prisma from 'src/prisma/Prisma';
import { UUID } from 'crypto';
@Injectable()
export class GanhoService {
  async create(createGanhoDto: CreateGanhoDto) {

    const ganho = await prisma.ganho.create({
      data: {
        name: createGanhoDto.name,
        description: createGanhoDto.description,
        value: createGanhoDto.value,
        fixo: createGanhoDto.fixo,
        userId: createGanhoDto.userId,
        origemId: createGanhoDto.origemId
      }
    });

    return ganho;
  }

  async findAll(userId: UUID) {
    const ganhos = await prisma.ganho.findMany({
      where: {
        userId: userId
      }
    });
    return ganhos;
  }

  findOne(id: UUID) {
    const ganho = prisma.ganho.findUnique({
      where: {
        id: id
      }
    })
    return ganho;
  }

  update(id: number, updateGanhoDto: UpdateGanhoDto) {
    return `This action updates a #${id} ganho`;
  }

  remove(id: UUID) {
    const ganho = prisma.ganho.delete({
      where: {
        id: id
      }
    })
    return ganho;
  }
}
