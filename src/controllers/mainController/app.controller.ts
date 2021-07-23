import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import 'axios';
import { ApiError } from '@models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(
    @Req() req, 
    @Res() res): Promise< number | ApiError > {
      
    const response = this.appService.MainPage();

    if (response instanceof(ApiError)) {
      return res.status(response.code).send(response);
    } else {
      return res.status(200).send(response);
    }
  }

  @Post('/info')
  async infoService(
    @Req() req, 
    @Res() res): Promise < any | ApiError > {
    console.log('requisição: ' + req + ' resposta: ' + res);

    const resposta = new ApiError(503, 'fail');

    res.status(200).send(resposta);
  }
}
