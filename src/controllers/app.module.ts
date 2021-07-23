import { Module } from '@nestjs/common';
import { 
  AppController,
  AppService
} from './index';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
