import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
dotenv.config();

export function getConfig(){
    return {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'nestjs_user',
        password: 'nestjs_2023',
        database: 'nestjs_db',
        entities:['dist/**/*.entity.js','dist/**/*.entity.ts'],
        migrations:['dist/db/migration/*.js']
        //synchronize: true,
    } as DataSourceOptions;
}