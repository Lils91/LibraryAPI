import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
    return user;
  }

  findByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }

  authenticate(username: string, password: string) {
    const user = this.findByUsername(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  findOne(userId: number): User | undefined {
    return this.users.find(user => user.id === userId);
  }
}