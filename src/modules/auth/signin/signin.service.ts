import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(data) {
    if (!data.password || !data.email) {
      throw new HttpException(
        'You must provide email and password',
        HttpStatus.CONFLICT,
      );
    }
    const user = await this.userModel.findOne({ email: data.email });
    if (!user) {
      throw new HttpException('unvalid email or password', HttpStatus.CONFLICT);
    }
    const isMatchedPassword = await bcrypt.compare(
      data.password,
      user.password,
    );
    if (!isMatchedPassword) {
      throw new HttpException('invaled password', HttpStatus.CONFLICT);
    }

    const payload = { id: user._id, name: user.name };
    const token = await this.jwtService.signAsync(payload, {
      secret: 'helooo ,this is just lab so i do not need too complex passwrod',
    });
    return {
      status: 'success',
      token,
      message: 'welcome',
    };
  }
}
