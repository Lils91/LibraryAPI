import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
    return book;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book => book.id === id);
  }

  update(id: number, updateBookDto: Partial<Book>) {
    const book = this.findOne(id);
    if (book) {
      Object.assign(book, updateBookDto);
    }
    return book;
  }

  remove(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }
}