import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
    
 
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ){
        
    }

   async create(createProductDto:CreateProductDto){
        //dbsave
        const product = new Product();
        product.name=createProductDto.name;

// product.user = new User({id:createProductDto.userId});
        const user=new User();
        user.id=createProductDto.userId;
        product.user=user;

// product.category=new Category({id:createProductDto.categoryId});
        const category = new Category();
        category.id=createProductDto.categoryId;
        product.category=category;

        product.categoryId=createProductDto.categoryId;
        const result = await this.productRepository.save(product);
        return result;
    }

    async update(createProductDto:CreateProductDto){
        const product = new Product();
        product.name= createProductDto.name;
        const result = await this.productRepository.save(product);
        return result;
    }

    async delete(id:string){
        return await this.productRepository.softDelete(id);
    }

    async all(){
        return await this.productRepository.find()
    }

    async getById(productId: string) {
        const result = await this.productRepository.find({
            where: {
                id: productId
            },
            relations:['category','user']
        })
    }


    async byCategoryId(catId: string) {
        const result = await this.productRepository.find({
            where:{
                categoryId: catId
            },
            relations:['user'],
            order:{
                createdAt:'DESC'
            }
        })
    }
}
