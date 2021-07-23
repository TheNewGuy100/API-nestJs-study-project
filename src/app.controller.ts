import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import 'axios';
import { ApiErrorModel } from '@models';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): Promise< number > {
    return this.appService.getHello();
  }

  @Post('/info')
  async infoService(@Req() req, @Res() res): Promise < any | ApiErrorModel> {
    console.log('requisição: ' + req + ' resposta: ' + res);

    const resposta = new ApiErrorModel(503, 'fail');

    res.status(200).send(resposta);
  }
}
