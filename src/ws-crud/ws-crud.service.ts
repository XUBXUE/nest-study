import { Injectable } from '@nestjs/common';
import { CreateWsCrudDto } from './dto/create-ws-crud.dto';
import { UpdateWsCrudDto } from './dto/update-ws-crud.dto';

@Injectable()
export class WsCrudService {
  create(createWsCrudDto: CreateWsCrudDto) {
    return 'This action adds a new wsCrud';
  }

  findAll() {
    return `This action returns all wsCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wsCrud`;
  }

  update(id: number, updateWsCrudDto: UpdateWsCrudDto) {
    return `This action updates a #${id} wsCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} wsCrud`;
  }
}
