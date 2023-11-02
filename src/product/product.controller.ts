import { Controller, Get, Post, Put, Delete,Body,Param,Patch} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}

    @Get()
    async activeProduct(){
        return this.productService.all()
    }

    @Get('byProductId/:productId')
    async byProductId(@Param('productId') productId:string){
        return await this.productService.getById(productId)
    }

    @Get('category/:catId')
    async byCategoryId(@Param('catId') catId: string){
        return await this.productService.byCategoryId(catId)
    }

    @Post()
    async create(@Body() createProductDto:CreateProductDto){
        return await this.productService.create(createProductDto);
    }

    @Patch(':id')
    async update(@Param('id') id:string,
           @Body() createProductDto:CreateProductDto){
            // createProductDto.id=id;
        return await this.productService.update(createProductDto)
           }
    
    @Delete(':id')
    async delete(@Param('id') id:string){
        return await this.productService.delete(id)
    }

    

}
