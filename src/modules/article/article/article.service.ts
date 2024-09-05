import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/article.schema';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async getAllArticles() {
    const articles = await this.articleModel.find();
    return {
      status: 'success',
      NumOfResult: articles.length,
      data: {
        articles,
      },
    };
  }

  async createArticle(article) {
    const newArticle = await this.articleModel.create(article);
    return { status: 'success', data: { newArticle } };
  }

  async getArticle(id: string) {
    const article = await this.articleModel.findById(id);
    return { status: 'success', data: { article } };
  }
  async upadateArticle(id: string, data: any) {
    const article = await this.articleModel.findByIdAndUpdate(id, data);
    return { status: 'success', data: { article } };
  }

  async deleteArticle(id: string) {
    await this.articleModel.findByIdAndDelete(id);
    return { status: 'success', data: null };
  }
}
