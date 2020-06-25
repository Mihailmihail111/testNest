import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { BookAuthorSeed } from "./seed/bookAuthor.seed";
import { BookAuthor } from "../book/entity/BookAuthor.entity";

export class bookAuthor1593042225036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository("BookAuthor").save(
            BookAuthorSeed
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
