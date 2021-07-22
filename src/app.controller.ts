import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): Promise< number > {
    return this.appService.getHello();
  }
}
