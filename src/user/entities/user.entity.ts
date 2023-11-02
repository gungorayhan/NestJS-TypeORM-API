import { BetaBaseEntity } from "src/entities/beta.base.entity";
import { Product } from "src/product/entities/product.entity";
import { Entity, Column, PrimaryColumn,CreateDateColumn,DeleteDateColumn,UpdateDateColumn,OneToMany } from "typeorm";

@Entity()
export class User extends BetaBaseEntity{
    
    // @PrimaryColumn()
    // id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    // @Column()
    // birtday:string;

    // @CreateDateColumn()
    // createdAt!:Date;

    // @UpdateDateColumn()
    // updated!:Date;

    // @DeleteDateColumn()
    // deletedAt!:Date;

    @OneToMany(()=>Product,(product)=>product.user)
    products:Product[];

}