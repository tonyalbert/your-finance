import { Injectable } from '@nestjs/common';
import { CreateOrigemDto } from './dto/create-origem.dto';
import { UpdateOrigemDto } from './dto/update-origem.dto';
import prisma from 'src/prisma/Prisma';
import { UUID } from 'crypto';

@Injectable()
export class OrigemService {
  async create(createOrigemDto: CreateOrigemDto) {

    const origem = await prisma.origem.create({
      data: createOrigemDto
    });

    return origem;
  }

  async findAll() {
    const origens = await prisma.origem.findMany();

    if (!origens) {
      return null;
    }

    return origens;
  }

  async findOne(id: UUID) {
    const origem = await prisma.origem.findUnique({
      where: {
        id
      }
    });

    if (!origem) {
      return null;
    }

    return origem;
  }

  update(id: number, updateOrigemDto: UpdateOrigemDto) {
    return `This action updates a #${id} origem`;
  }

  remove(id: UUID) {
    const origem = prisma.origem.delete({
      where: {
        id
      }
    });

    if (!origem) {
      return null;
    }

    return origem;
  }
}
