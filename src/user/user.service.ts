import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        ){}
    activeUser(){
        return [
            {id: 1, name: 'ayhan'},
            {id: 2, name:'gungor'}
        ]
    }

    async create(createUserDto:CreateUserDto){
        const newUser = await this.userRepository.create();
        newUser.id=uuidv4();
        newUser.name=createUserDto.name;
        newUser.email=createUserDto.email;
        await this.userRepository.save(newUser);
        //this.logger.warn(JSON.stringify(newUser));
        return {message:'Saved', newUser};
    }
}
