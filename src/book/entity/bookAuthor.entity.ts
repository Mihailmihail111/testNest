import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable} from 'typeorm';
import {BookName} from "./bookName.entity";

@Entity()
export class BookAuthor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;

    @CreateDateColumn({nullable: true,})
    createdAt?: Date;

    @CreateDateColumn({nullable: true,})
    updatedAt?: Date;
}
