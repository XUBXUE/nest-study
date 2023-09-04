import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestCrudService } from './rest-crud.service';
import { CreateRestCrudDto } from './dto/create-rest-crud.dto';
import { UpdateRestCrudDto } from './dto/update-rest-crud.dto';

@Controller('rest-crud')
export class RestCrudController {
  constructor(private readonly restCrudService: RestCrudService) {}

  @Post()
  create(@Body() createRestCrudDto: CreateRestCrudDto) {
    return this.restCrudService.create(createRestCrudDto);
  }

  @Get()
  findAll() {
    return this.restCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestCrudDto: UpdateRestCrudDto) {
    return this.restCrudService.update(+id, updateRestCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restCrudService.remove(+id);
  }
}
