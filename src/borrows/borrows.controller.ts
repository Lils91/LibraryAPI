import { Controller, Post, Body, Param } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { BooksService } from '../books/books.service';
import { UsersService } from '../users/users.service';
import { Borrow } from './entities/borrow.entity';
import { CreateBorrowDto } from './dto/create-borrow.dto';

@Controller('borrows')
export class BorrowsController {
  constructor(
    private readonly borrowsService: BorrowsService,
    private readonly booksService: BooksService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  borrowBook(@Body() borrow: Borrow) {
    return this.borrowsService.borrowBook(borrow);
  }

  @Post('dto')
  async borrowBookWithDto(@Body() createBorrowDto: CreateBorrowDto) {
    const book = await this.booksService.findOne(createBorrowDto.bookId); // On récupère le livre
    const user = await this.usersService.findOne(createBorrowDto.userId); // On récupère l'utilisateur

    if (!book || !user) {
      return { message: 'Book or User not found' };
    }

    const borrow: Borrow = {
      id: Date.now(), // Génère un ID fictif (à ajuster selon ta logique)
      book: book,
      user: user,
      borrowDate: createBorrowDto.borrowDate,
      returnDate: null,
    };

    return this.borrowsService.borrowBook(borrow);
  }

  @Post(':id/rate')
  rateBook(@Param('id') id: string, @Body() { userId, rating }: { userId: number, rating: number }) {
    return this.borrowsService.rateBook(userId, +id, rating);
  }
}