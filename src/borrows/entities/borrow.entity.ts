import { Book } from '../../books/entities/book.entity';
import { User } from '../../users/entities/user.entity';

export class Borrow {
  id: number;
  book: Book;
  user: User;
  borrowDate: Date;
  returnDate: Date | null;
}