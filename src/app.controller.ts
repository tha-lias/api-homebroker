/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//MCV - C
@Controller('/teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/rota')
  getHello(): string {
    return this.appService.getHello();
  }
}
