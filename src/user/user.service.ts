import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    activeUser(){
        return [
            {id: 1, name: 'ayhan'},
            {id: 2, name:'gungor'}
        ]
    }

    create(createUserDto:CreateUserDto){
        return {message:'Saved', createUserDto};
    }
}
