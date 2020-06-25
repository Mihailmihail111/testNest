import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { Connection } from "typeorm";

@Module({
  imports: [
      BookModule,
      TypeOrmModule.forRoot(ormconfig)
  ],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
