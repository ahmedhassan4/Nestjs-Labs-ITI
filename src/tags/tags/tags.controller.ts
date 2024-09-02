import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagDTO } from 'src/dto/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly _tagsService: TagsService) {}

  @Get()
  getAllTags() {
    return this._tagsService.getAllTags();
  }

  @Post()
  createTag(@Body() tagDto: TagDTO) {
    return this._tagsService.createTag(tagDto);
  }

  @Get(':id')
  getTag(@Param('id') id: number) {
    return this._tagsService.getTag(id);
  }

  @Patch(':id')
  updateTag(@Param('id') id: number, @Body() updatedTag: TagDTO) {
    return this._tagsService.updateTag(id, updatedTag);
  }

  @Delete(':id')
  deleteTag(@Param('id') id: number) {
    return this._tagsService.deleteTag(id);
  }
}
