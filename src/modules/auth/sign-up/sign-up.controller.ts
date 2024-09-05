import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private _SignUpService: SignUpService) {}
  @Post()
  signUp(@Body() data) {
    return this._SignUpService.signUp(data);
  }
}
