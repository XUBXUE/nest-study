import { Test, TestingModule } from '@nestjs/testing';
import { WsCrudGateway } from './ws-crud.gateway';
import { WsCrudService } from './ws-crud.service';

describe('WsCrudGateway', () => {
  let gateway: WsCrudGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsCrudGateway, WsCrudService],
    }).compile();

    gateway = module.get<WsCrudGateway>(WsCrudGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
