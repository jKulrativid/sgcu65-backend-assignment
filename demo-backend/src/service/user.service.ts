import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers(): string {
    return 'user list : [...]';
  }

  getUserById(): string {
    return 'This is a user!';
  }

  createUser(): string {
    return 'User created';
  }

  updateUser(): string {
    return 'User updated';
  }

  deleteUserById(): string {
    return 'User deleted';
  } 
}
