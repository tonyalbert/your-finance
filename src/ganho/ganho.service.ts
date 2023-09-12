import { Injectable } from '@nestjs/common';
import { CreateGanhoDto } from './dto/create-ganho.dto';
import { UpdateGanhoDto } from './dto/update-ganho.dto';

@Injectable()
export class GanhoService {
  create(createGanhoDto: CreateGanhoDto) {
    return 'This action adds a new ganho';
  }

  findAll() {
    return `This action returns all ganho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ganho`;
  }

  update(id: number, updateGanhoDto: UpdateGanhoDto) {
    return `This action updates a #${id} ganho`;
  }

  remove(id: number) {
    return `This action removes a #${id} ganho`;
  }
}
