import { Module } from '@nestjs/common';
import { WsCrudService } from './ws-crud.service';
import { WsCrudGateway } from './ws-crud.gateway';

@Module({
  providers: [WsCrudGateway, WsCrudService],
})
export class WsCrudModule {}
