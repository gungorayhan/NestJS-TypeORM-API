import { IsEmail, IsNotEmpty, IsString, IsDate, IsDateString } from 'class-validator';
// import { IsAdult } from './user.validation';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    // @IsDateString()
    // // @IsAdult({message: 'Kayıt için 18 yaşından büyük olmalı'});
    // birtday: Date;

}