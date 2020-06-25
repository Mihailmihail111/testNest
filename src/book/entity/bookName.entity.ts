import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BaseEntity,
    OneToOne,
    JoinColumn,
    ManyToMany, JoinTable
} from 'typeorm';
import { BookGenre } from "./bookGenre.entity";
import { BookAuthor } from "./bookAuthor.entity";

@Entity()
export class BookName extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({type: 'text', nullable: true, default: null})
    description: string;

    @ManyToMany(type => BookGenre)
    @JoinTable()
    bookGenre: Promise<BookGenre[]>;

    @Column()
    bookGenreId: number;

    @ManyToMany(type => BookAuthor)
    @JoinTable()
    bookAuthors: Promise<BookAuthor[]>;

    @Column()
    bookAuthorId: number;

    @CreateDateColumn({nullable: true})
    createdAt?: Date;

    @CreateDateColumn({nullable: true})
    updatedAt?: Date;
}
