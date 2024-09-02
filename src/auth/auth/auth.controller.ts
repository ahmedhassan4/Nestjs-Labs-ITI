import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}
  @Get()
  getAllUsers() {
    return this._authService.getAlluses();
  }

  @Post('/signIn')
  signIn(@Body() userData: UserDTO) {
    return this._authService.signIn(userData);
  }

  @Post('signUp')
  signUp(@Body() userData: UserDTO) {
    return this._authService.signUp(userData);
  }
}
