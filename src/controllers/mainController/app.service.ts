import { ApiError } from '@models';
import { Injectable } from '@nestjs/common';

const jsdom = require('jsdom');

@Injectable()
export class AppService {

  async MainPage(): Promise< any | ApiError> {
    try {
      return 'hello';

    } catch (error) {
      console.log(error);
      return new ApiError(500, "operation.fail");
    }
  }

  async infoGetter(): Promise < any > {
    try {
      return 'olá você caiu na API do pedro, :) estamos trabalhando no momento!';
      
    } catch (error) {
      console.log(error);
      return new ApiError(500, "operation.fail");
    }
  }
}
