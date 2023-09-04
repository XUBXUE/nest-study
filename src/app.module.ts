import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
import { RestCrudModule } from './rest-crud/rest-crud.module';
import { WsModule } from './ws/ws.module';
import { WsCrudModule } from './ws-crud/ws-crud.module';

@Module({
  imports: [RestModule, RestCrudModule, WsModule, WsCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
