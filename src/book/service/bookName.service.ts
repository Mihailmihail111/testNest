import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { BookName } from "../entity/bookName.entity";
import { Repository } from "typeorm";
import { CreateBookNameDto, UpdateBookNameDto} from '../dto/dto';
import { BookGenre } from "../entity/bookGenre.entity";

@Injectable()
export class BookNameService {
    constructor(
        @InjectRepository(BookName)
        private bookNameRepository: Repository<BookName>,
    ) {}

    async findAll(): Promise<BookName[]> {
        return await this.bookNameRepository.find();
    }

    findOne(id: number): Promise<BookName> {
        return this.bookNameRepository.findOne(id);
    }

    create(createBookNameDto: CreateBookNameDto): Promise<BookName> {
        const bookName = new BookName();
        delete bookName.id;
        bookName.name = createBookNameDto.name;
        bookName.description = createBookNameDto.description;
        bookName.bookGenreId = createBookNameDto.bookGenreId;
        bookName.bookAuthorId = createBookNameDto.bookAuthorId;

        return this.bookNameRepository.save(bookName);
    }

    async update(id: number, updateBookNameDto: UpdateBookNameDto) {
        const book = await this.bookNameRepository.findOne(id);
        book.name = updateBookNameDto.name;
        book.description = updateBookNameDto.description;
        book.bookGenreId = updateBookNameDto.bookGenreId;
        book.bookAuthorId = updateBookNameDto.bookAuthorId;

        return this.bookNameRepository.save(book);
    }

    async remove(id: number): Promise<void> {
        await this.bookNameRepository.delete(id);
    }
}
