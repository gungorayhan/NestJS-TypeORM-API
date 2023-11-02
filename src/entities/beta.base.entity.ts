import {BeforeInsert, PrimaryColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export abstract class BetaBaseEntity{

    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @BeforeInsert()
    async beforeInsert(){
        this.id=uuidv4();
    }

    @CreateDateColumn()
    createdAt!:Date;

    @UpdateDateColumn()
    updatedAt!:Date;

    @DeleteDateColumn()
    deletedAt!:Date;

}