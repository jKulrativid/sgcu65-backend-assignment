import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('')
  getAllUsers(): string {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(): string {
    return this.userService.getUserById();
  }

  @Post('')
  createUser(): string {
    return this.userService.createUser();
  }

  @Put(':id')
  updateUserById(): string {
    return this.userService.updateUser();
  }

  @Delete(':id')
  deleteUserById(): string {
    return this.userService.deleteUserById();
  }

}
