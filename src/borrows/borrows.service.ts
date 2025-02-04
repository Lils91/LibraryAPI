import { Injectable } from '@nestjs/common';
import { Borrow } from './entities/borrow.entity';
import { Book } from '../books/entities/book.entity';

@Injectable()
export class BorrowsService {
  private borrows: Borrow[] = [];

  borrowBook(borrow: Borrow) {
    this.borrows.push(borrow);
    return borrow;
  }

  findBorrowedBooksByUser(userId: number) {
    return this.borrows.filter(borrow => borrow.user.id === userId);
  }

  rateBook(userId: number, bookId: number, rating: number) {
    const borrow = this.borrows.find(
      (b) => b.user.id === userId && b.book.id === bookId,
    );
    if (borrow) {
      borrow.book.rating = rating;
      return borrow.book;
    }
    return null;
  }
}