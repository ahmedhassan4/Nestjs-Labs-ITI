import { Injectable } from '@nestjs/common';
import { TagDTO } from 'src/dto/tags.dto';

@Injectable()
export class TagsService {
  private tags: TagDTO[] = [
    { title: 'tag11', id: 1 },
    { title: 'tag22', id: 2 },
    { title: 'tag33', id: 3 },
  ];

  getAllTags(): TagDTO[] {
    return this.tags;
  }

  getTag(id: number): TagDTO {
    return this.tags.find((tag) => tag.id === Number(id));
  }

  createTag(tagDto: TagDTO): TagDTO {
    this.tags.push(tagDto);
    return tagDto;
  }

  updateTag(id: number, updatedTag: TagDTO) {
    const index = this.tags.findIndex((tag) => tag.id == id);
    this.tags[index] = updatedTag;
    return updatedTag;
  }

  deleteTag(id: number) {
    const index = this.tags.findIndex((tag) => tag.id == id);
    this.tags.splice(index, 1);
    return 'deleted';
  }
}
