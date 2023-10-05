import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    activeUsers(){
        return this.userService.activeUser();
    }

    @Post()
    create(@Body() body:CreateUserDto){
        return this.userService.create(body);
    }

}
