import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAllUsers() {
    const users = await this.userModel.find();
    return {
      status: 'success',
      numOfUsers: users.length,
      data: {
        users,
      },
    };
  }
}
