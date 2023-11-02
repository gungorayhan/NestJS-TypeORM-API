import { IsString } from "class-validator";

export class CategoryCreateUpdateDto{
    @IsString()
    name:string;
}