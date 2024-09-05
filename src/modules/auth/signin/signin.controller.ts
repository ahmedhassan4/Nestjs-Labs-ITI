import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';

@Controller('signin')
export class SigninController {
  constructor(private _signinService: SigninService) {}
  @Post()
  signIn(@Body() data) {
    return this._signinService.signIn(data);
  }
}
