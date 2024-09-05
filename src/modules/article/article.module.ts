import { Module } from '@nestjs/common';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/core/schemas/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
