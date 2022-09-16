import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Tdogg', email: 'tdogg@tdogg.com' },
    { username: 'Bdogg', email: 'bdogg@bdog.com' },
    { username: 'GDogg', email: 'greg@gdog.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}