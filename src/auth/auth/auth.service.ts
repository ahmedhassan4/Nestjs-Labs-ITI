import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class AuthService {
  private users = [
    {
      name: 'ahmed',
      email: 'ahmedhassan@gmail.com',
      password: 'test1234',
    },
    {
      name: 'mohamed',
      email: 'mohamedHosny@gmail.com',
      password: 'test1234',
    },
    {
      name: 'abdallah',
      email: 'abdallahahmed@gmail.com',
      password: 'test1234',
    },
  ];

  getAlluses() {
    return this.users;
  }

  signIn(user: UserDTO) {
    if (!user.email || !user.password) {
      return 'you must add email and password to login ';
    }

    const trustedUser = this.users.find((u) => u.email == user.email);
    if (trustedUser && trustedUser.password == user.password) {
      return `Helloooo ${trustedUser.name}`;
    }
    return 'email or password are not valid ';
  }

  signUp(user: UserDTO) {
    const currentUser = this.users.find((u) => u.email == user.email);
    if (currentUser) {
      return `this emial: ${user.email} exist. try another one or Login with this email`;
    }
    if (!user.email || !user.name || !user.password) {
      return `you must add Name | email | passowrd to register`;
    }
    this.users.push(user);
    return 'user added';
  }
}
