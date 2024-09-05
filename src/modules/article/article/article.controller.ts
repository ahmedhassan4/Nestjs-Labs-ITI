import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private _articleService: ArticleService) {}
  @Get()
  getAllArticles() {
    return this._articleService.getAllArticles();
  }

  @Post()
  createArticle(@Body() article: any) {
    return this._articleService.createArticle(article);
  }

  @Get(':id')
  getArticle(@Param('id') id: string) {
    return this._articleService.getArticle(id);
  }

  @Patch(':id')
  updateArticle(@Param('id') id: string, @Body() data: any) {
    return this._articleService.upadateArticle(id, data);
  }

  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    return this._articleService.deleteArticle(id);
  }
}
