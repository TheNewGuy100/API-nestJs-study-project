import { ApiError } from '@models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  async MainPage(): Promise < any | ApiError> {
    try {
      return 'olá você caiu na API do pedro, :) estamos trabalhando no momento!';

    } catch (error) {
      return new ApiError(500, "operation.fail");
    }
  }

  async infoGetter(): Promise < any > {
    return 'hey';
  }
}
