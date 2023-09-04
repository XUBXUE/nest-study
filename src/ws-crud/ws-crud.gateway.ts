import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { WsCrudService } from './ws-crud.service';
import { CreateWsCrudDto } from './dto/create-ws-crud.dto';
import { UpdateWsCrudDto } from './dto/update-ws-crud.dto';

@WebSocketGateway()
export class WsCrudGateway {
  constructor(private readonly wsCrudService: WsCrudService) {}

  @SubscribeMessage('createWsCrud')
  create(@MessageBody() createWsCrudDto: CreateWsCrudDto) {
    return this.wsCrudService.create(createWsCrudDto);
  }

  @SubscribeMessage('findAllWsCrud')
  findAll() {
    return this.wsCrudService.findAll();
  }

  @SubscribeMessage('findOneWsCrud')
  findOne(@MessageBody() id: number) {
    return this.wsCrudService.findOne(id);
  }

  @SubscribeMessage('updateWsCrud')
  update(@MessageBody() updateWsCrudDto: UpdateWsCrudDto) {
    return this.wsCrudService.update(updateWsCrudDto.id, updateWsCrudDto);
  }

  @SubscribeMessage('removeWsCrud')
  remove(@MessageBody() id: number) {
    return this.wsCrudService.remove(id);
  }
}
