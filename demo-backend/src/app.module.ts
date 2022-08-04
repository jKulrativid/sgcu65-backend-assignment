import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { UserController } from './controller/user.controller';
import { AppService } from './service/app.service';
import { UserService } from './service/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
