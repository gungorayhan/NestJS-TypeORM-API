import { Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    activeUsers(){
        return this.userService.activeUser();
    }

    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    update(
        @Param('id') id:string,
        @Body() updateUserDto:UpdateUserDto){
            updateUserDto.id=id;
        return this.userService.update(updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.userService.delete(id)
    }

}
