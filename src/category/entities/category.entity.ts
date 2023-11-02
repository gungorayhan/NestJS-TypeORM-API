import { BetaBaseEntity } from "src/entities/beta.base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Category extends BetaBaseEntity{

    @Column()
    name:string;

}