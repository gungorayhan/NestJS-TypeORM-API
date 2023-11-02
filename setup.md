 ## nest.js

 npm install -g @nestjs/cli <br/>
 nest new nestjs_project_name <br/>

 nest start <br/>
 nest start --watch <br/>
 
 ## add global.Pipes in main.ts
 app.useGlobalPipes(new ValidationPipe());<br/>

 ## new module and controller and service and database --- 3 layer architecture 
 nest generate module user  || nest g m user <br/>

 nest generate contoller user <br/>

 nest generate service user
  
 ## validation -  DTO object
 npm i class-validator class-transformer<br/>
 user -> dto -> create-user.dto.ts <br/>
 
 ## docker-compose.yml create for mysql
 docker compose up -d<br/>
 ## create .env

 ## and add mysql.connect in app.module  

 ## necessary for typeorm 
 npm --save @nestjs/typeorm typeorm mysql2

 ## then setup typeormmodule.forRoot in appmodule

 ## user->entities 
 user.entity.ts <br/>

 ## uuid
 npm i uuid --save

 ## @oneToMany and @mantToOne and @oneToOne

 ## new module. new controller and new services
 nest generate module product <br/>
 nest generate controller product <br/>
 nest generate service product <br/>

## create dto and create entity
## import product entity in app.module and in product module
## add entity -> product module -> imports[TypeOrmModule.forFeature([Product])]
## if i want to add the title of swagger , we will add swagger with nestjs/swagger

 ## new module. new controller and new services -- category
 nest generate module category <br/>
 nest generate controller category <br/> 
 nest generate service category <br/>
 create dto(class-validator) and create entity(typeorm) <br/>
 import category entity in app.module -> typeorm.entities <br/>
 add entity -> category module -> imports[TypeOrmModule.forFeature([Category])]<br/>
 controller -> constructor-> private readonly categoryService:CategoryService<br/>
 service -> contructor ->@InjectRepository(Category) private readonly categoryRepository:Repository<Category> <br/>

 ## category not found exception 

