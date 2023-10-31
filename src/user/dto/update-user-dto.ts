import { IsEmpty, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto{

    @IsEmpty()
    @IsString()
    id: string;
};