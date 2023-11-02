import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { getConfig } from 'db/data-source.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
     useFactory:()=>(
      getConfig()
      // type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      // username: 'nestjs_user',
      // password: 'nestjs_2023',
      // database: 'nestjs_db',
      // //entities: [User, Product, Category],
      // entities:['dist/**/*.entity.js','dist/**/*.entity.ts'], // isimlendirmeye dikkat edilecek
      // synchronize: true, //dikkat et production ortamında silinmesi gerekebilir. veri kayıplarının önüne geçmek için
     )
    }),
    UserModule,
    ProductModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
