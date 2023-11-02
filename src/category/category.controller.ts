// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateUpdateDto } from './dto/category-create-update.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService){

    }

    @Get()
    async getAll(){
        return await this.categoryService.getAll()
    }

    @Post()
    async create(@Body() category:CategoryCreateUpdateDto){
        return await this.categoryService.create(category)
    }

    @Patch(':categoryId')
    async update(@Param('categoryId') categoryId:string,
    @Body() category:CategoryCreateUpdateDto){
        return this.categoryService.update(categoryId,category)
    }

    @Delete(':categoryId')
    async delete(@Param('categoryId') categoryId:string){
        return this.categoryService.delete(categoryId);

    }

}
