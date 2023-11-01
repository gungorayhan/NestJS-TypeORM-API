import { Entity, Column, PrimaryColumn,CreateDateColumn,DeleteDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class User{
    
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    birthdate:string;

    @CreateDateColumn()
    createdAt!:Date;

    @UpdateDateColumn()
    updated!:Date;

    @DeleteDateColumn()
    deletedAt!:Date;


}