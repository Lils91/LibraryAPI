import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Post('login')
  login(@Body() { username, password }: { username: string, password: string }) {
    const user = this.usersService.authenticate(username, password);
    if (user) {
      return { message: 'Login successful', user };
    }
    return { message: 'Invalid credentials' };
  }
}