import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { Connection } from "typeorm";

@Module({
  imports: [
      BookModule,
      TypeOrmModule.forRoot(config)
  ],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
