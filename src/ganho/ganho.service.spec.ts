import { Test, TestingModule } from '@nestjs/testing';
import { GanhoService } from './ganho.service';

describe('GanhoService', () => {
  let service: GanhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GanhoService],
    }).compile();

    service = module.get<GanhoService>(GanhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
