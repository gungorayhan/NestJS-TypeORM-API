 ## nest.js

 npm install -g @nestjs/cli <br/>
 nest new nestjs_project_name <br/>

 nest start <br/>
 nest start --watch <br/>
 
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

 ## necessary for typeorm 
 npm --save @nestjs/typeorm typeorm mysql2

 ## then setup typeormmodule.forRoot in appmodule

 ## user->entities 
 user.entity.ts <br/>

 ## uuid
 npm i uuid --save