import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        ){}
    async activeUser(){

        return await this.userRepository.find();
        // return [
        //     {id: 1, name: 'ayhan'},
        //     {id: 2, name:'gungor'}
        // ]
    }

    async create(createUserDto: CreateUserDto){
        const newUser = await this.userRepository.create();
        // newUser.id=uuidv4();
        newUser.name=createUserDto.name;
        newUser.email=createUserDto.email;
        // newUser.birtday=createUserDto.birtday;
        await this.userRepository.save(newUser);
        //this.logger.warn(JSON.stringify(newUser));
        return {message:'Saved', newUser};
    }

    async update(updateUserDto: UpdateUserDto){
        const user =await this.userRepository.findOne({
        where:{
            id:updateUserDto.id,
        }
});
        if(user){
            user.name=updateUserDto.name;
            user.email=updateUserDto.email;
        } else {
        console.log("else");
        }

       return await this.userRepository.save(user);
        
    }

    async delete(id:string){
        return await this.userRepository.softDelete(id);
    }
}
