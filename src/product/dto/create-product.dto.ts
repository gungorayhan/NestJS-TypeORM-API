import {IsNotEmpty,IsEmail, IsString} from 'class-validator'

export class CreateProductDto{
 
    @IsString()
    name: string;

    @IsString()
    userId: string;

    @IsString()
    categoryId:string;
}