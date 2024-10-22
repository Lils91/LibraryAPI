import { Book } from '../../books/entities/book.entity';

export class User {
  id: number;
  username: string;
  password: string;
  borrowedBooks: Book[];
}
