import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article/article.module';
import { TagsModule } from './modules/tags/tags.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    AuthModule,
    ArticleModule,
    TagsModule,
    MongooseModule.forRoot('mongodb://localhost/nest_iti'),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
