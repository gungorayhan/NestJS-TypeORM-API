import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CategoryCreateUpdateDto } from './dto/category-create-update.dto';
import { isDefined } from 'class-validator';
import { CategoryNotFoundException } from 'src/common/exceptions/category.notfound.exception';

@Injectable()
export class CategoryService {
 
   
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {

    }

    async getAll() {
        const result = await this.categoryRepository.find();
        return result;
    }

    async create(category: CategoryCreateUpdateDto) {
       //const newCategory = await this.categoryRepository.create(category);
       //return newCategory;
       const newCat = new Category();
       newCat.name = category.name;
       
       return await this.categoryRepository.save(newCat);
       
    }

    async update(categoryId: string, category: CategoryCreateUpdateDto) {
    const findCat= await this.categoryRepository.findOne({
        where:{id:categoryId}})

         if(isDefined(findCat)){
            findCat.name=category.name;
            return await this.categoryRepository.save(findCat);
         }else{
            throw new CategoryNotFoundException(categoryId);
         }
    }
   

    async delete(categoryId) {
        const findCat= await this.categoryRepository.findOne({
            where:{id:categoryId}
        })
             if(isDefined(findCat)){
                return await this.categoryRepository.softDelete(categoryId);
             }else{
                throw new CategoryNotFoundException(categoryId);
             }
    }
}
