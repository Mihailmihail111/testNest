import { getRepository, MigrationInterface, QueryRunner, Repository} from "typeorm";
import { BookGenre } from "../book/entity/BookGenre.entity";
import { BookGenreSeed } from "./seed/bookGenre.seed"

export class bookGenre1593035995703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getRepository("BookGenre").save(
            BookGenreSeed
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
