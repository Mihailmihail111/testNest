import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookNameService } from "../service/bookName.service";
import { BookName } from "../entity/bookName.entity";
import { CreateBookNameDto, UpdateBookNameDto} from '../dto/dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookNameService: BookNameService) {}

    @Get()
    getAllBooks(): any {
       return this.bookNameService.findAll();
    }

    @Get(':id')
    getOneBook(id: number): any {
        return this.bookNameService.findOne(id);
    }

    @Post()
    createBookRecord(@Body() createBookNameDto: CreateBookNameDto ): Promise<BookName> {
        return this.bookNameService.create(createBookNameDto);
    }

    @Put(':id')
    updateBookRecord(
        @Param('id') id: number,
        @Body() updateBookNameDto: UpdateBookNameDto
    ): Promise<BookName> {
        return this.bookNameService.update(id, updateBookNameDto);
    }

    @Delete(':id')
    deleteBookRecord(@Param('id') id: number): Promise<void> {
        return this.bookNameService.remove(id);
    }
}
