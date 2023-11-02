import { Category } from 'src/category/entities/category.entity';
import { BetaBaseEntity } from 'src/entities/beta.base.entity';
import { User } from 'src/user/entities/user.entity';
import {BeforeInsert, PrimaryColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Product extends BetaBaseEntity {
    // @PrimaryColumn()
    // id:string;

    @Column()
    name:string;

    // @BeforeInsert()
    // async beforeInsert(){
    //     this.id=uuidv4();
    // }

    // @CreateDateColumn()
    // createdAt!:Date;

    // @UpdateDateColumn()
    // updatedAt!:Date;

    // @DeleteDateColumn()
    // deletedAt!:Date;

    @ManyToOne(()=>User,(user)=>user.products)
    user:User;

    @Column()
    userId:string;

     @ManyToOne(()=>Category,{nullable:true})
     category?:Category;

     @Column()
     categoryId:string;

     @Column()
     descriptions:string;

     @Column()
     imageUrl:string;
}