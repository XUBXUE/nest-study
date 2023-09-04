import { PartialType } from '@nestjs/mapped-types';
import { CreateWsCrudDto } from './create-ws-crud.dto';

export class UpdateWsCrudDto extends PartialType(CreateWsCrudDto) {
  id: number;
}
