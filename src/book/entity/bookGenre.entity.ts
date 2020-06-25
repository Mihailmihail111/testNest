import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class BookGenre extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, nullable: false})
    name: string;

    @CreateDateColumn({nullable: true,})
    createdAt?: Date;

    @CreateDateColumn({nullable: true,})
    updatedAt?: Date;
}
