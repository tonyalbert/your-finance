import { Module } from '@nestjs/common';
import { GanhoService } from './ganho.service';
import { GanhoController } from './ganho.controller';

@Module({
  controllers: [GanhoController],
  providers: [GanhoService],
})
export class GanhoModule {}
