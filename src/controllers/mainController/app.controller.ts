import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiError } from '@models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/main')
  async index(
    @Req() req,
    @Res() res): Promise< any | ApiError > {

    const response = await this.appService.MainPage();

    if (response instanceof(ApiError)) {
      return res.status(response.code).send(response);
    } else {
      return res.status(200).send(response);
    }
  }

  @Post('/test')
  async infoService(
    @Req() req, 
    @Res() res): Promise < any | ApiError > {

    const response = this.appService.infoGetter();

    if (response instanceof(ApiError)) {
      return res.status(response.code).send(response);
    } else {
      return res.status(200).send(response);
    }
  }
}

