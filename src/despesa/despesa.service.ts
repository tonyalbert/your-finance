import { Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import prisma from 'src/prisma/Prisma';
import { UUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DespesaService {
  constructor(private readonly jwtService: JwtService) {}
  async create(createDespesaDto: CreateDespesaDto, userId: UUID) {

    const despesa = await prisma.despesa.create({
      data: {
        name: createDespesaDto.name,
        description: createDespesaDto.description,
        value: createDespesaDto.value,
        fixo: createDespesaDto.fixo,
        userId: userId,
        origemId: createDespesaDto.origemId
      }
    })

    return despesa;
  }

  findAll(userId: UUID) {
    const despesas = prisma.despesa.findMany({
      where: {
        userId: userId
      }
    });
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

  extractPayload(token: string) {
    try {
      const payload = this.jwtService.verify(token);

      return payload;
    } catch (error) {
      // Trate erros de validação do JWT aqui
      return { erro: 'Token JWT inválido' };
    }
  }
}
