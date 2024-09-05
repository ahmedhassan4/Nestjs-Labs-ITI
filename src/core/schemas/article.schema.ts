import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Article {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true, unique: true })
  slug: string;
  @Prop()
  discription: string;
  @Prop()
  content: string;
  @Prop()
  converImage: string;
  @Prop([String])
  images: string[];
  @Prop({ default: 0 })
  likes: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
