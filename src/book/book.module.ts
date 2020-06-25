import { Module } from '@nestjs/common';
import { BookNameService } from './service/bookName.service';
import { BookController } from './controller/book.controller';
import { BookName } from "./entity/bookName.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([BookName])],
  providers: [
      BookNameService,
  ],
  controllers: [BookController]
})
export class BookModule {}
