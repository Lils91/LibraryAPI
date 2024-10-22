import { Module } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { BorrowsController } from './borrows.controller';
import { BooksModule } from '../books/books.module'; // Import du BooksModule
import { UsersModule } from '../users/users.module'; // Import du UsersModule

@Module({
  imports: [BooksModule, UsersModule], // Import des modules nécessaires
  providers: [BorrowsService],
  controllers: [BorrowsController],
})
export class BorrowsModule {}
