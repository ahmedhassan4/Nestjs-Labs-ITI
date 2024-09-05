import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(data) {
    const alreadyRegister = await this.userModel.findOne({ email: data.email });
    if (alreadyRegister) {
      throw new HttpException('email already exist', HttpStatus.CONFLICT);
    }

    const saltOrRounds = 10;
    const password = data.password;
    data.password = await bcrypt.hash(password, saltOrRounds);

    const newRegisteredUser = await this.userModel.create(data);
    return {
      status: 'success',
      data: {
        newRegisteredUser,
      },
    };
  }
}
