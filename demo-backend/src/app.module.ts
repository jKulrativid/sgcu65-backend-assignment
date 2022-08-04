import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controller/app.controller';
import { UserController } from './controller/user.controller';

import { AppService } from './service/app.service';
import { UserService } from './service/user.service';

import { User } from './model/user.model';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
