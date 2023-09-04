import { Test, TestingModule } from '@nestjs/testing';
import { WsCrudService } from './ws-crud.service';

describe('WsCrudService', () => {
  let service: WsCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsCrudService],
    }).compile();

    service = module.get<WsCrudService>(WsCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
