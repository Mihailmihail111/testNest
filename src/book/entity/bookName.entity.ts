import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { BookGenre } from "./bookGenre.entity";
import { BookAuthor } from "./bookAuthor.entity";

@Entity()
export class BookName  extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({type: 'text', nullable: true, default: null})
    description: string;

    @OneToOne(type => BookGenre)
    @JoinColumn()
    bookGenre: BookGenre;

    @Column()
    bookGenreId: number;

    @OneToOne(type => BookAuthor)
    @JoinColumn()
    bookAuthor: BookAuthor;

    @Column()
    bookAuthorId: number;

    @CreateDateColumn({nullable: true})
    createdAt?: Date;

    @CreateDateColumn({nullable: true})
    updatedAt?: Date;
}
