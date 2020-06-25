export class CreateBookNameDto {
    name: string;
    description: string;
    bookGenreId: number;
    bookAuthorId: number;
}

export class UpdateBookNameDto {
    name: string;
    description: string;
    bookGenreId: number;
    bookAuthorId: number;
}
