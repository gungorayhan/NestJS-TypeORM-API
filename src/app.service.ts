import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World.This is my first nest app!!!';
  }

  create(body: any): string {
    return JSON.stringify(body);
  }
}
