import {HttpException, HttpStatus} from "@nestjs/common"

export class CategoryNotFoundException extends HttpException{
    constructor(catId:string){
        super(`${catId} Category not Found`, HttpStatus.NOT_FOUND)
    }
}