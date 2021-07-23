import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  async getHello(): Promise < any > {



    return 'olá você caiu na API do pedro, :) estamos trabalhando no momento!';
  }

  async infoGetter(): Promise < any > {
    return 'hey';
  }
}
