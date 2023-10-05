import { IsEmail, IsEmpty } from "class-validator";


export class CreateUserDto{
   
    name: string;

    @IsEmail()
    email: string;
}