import { PartialType } from '@nestjs/mapped-types';
import { CreateGanhoDto } from './create-ganho.dto';

export class UpdateGanhoDto extends PartialType(CreateGanhoDto) {}
