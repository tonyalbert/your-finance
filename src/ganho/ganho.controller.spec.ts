import { Test, TestingModule } from '@nestjs/testing';
import { GanhoController } from './ganho.controller';
import { GanhoService } from './ganho.service';

describe('GanhoController', () => {
  let controller: GanhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GanhoController],
      providers: [GanhoService],
    }).compile();

    controller = module.get<GanhoController>(GanhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
