import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({ timestamps: true, versionKey: false })
export class tagSchema {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;
}
