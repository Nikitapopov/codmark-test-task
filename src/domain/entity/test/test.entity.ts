import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column()
    isPublished: boolean;
}
