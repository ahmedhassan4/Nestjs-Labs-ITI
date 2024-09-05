import { Module } from '@nestjs/common';
import { SigninController } from './signin/signin.controller';
import { SigninService } from './signin/signin.service';
import { SignUpController } from './sign-up/sign-up.controller';
import { SignUpService } from './sign-up/sign-up.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [SigninController, SignUpController],
  providers: [SigninService, SignUpService, JwtService],
})
export class AuthModule {}
