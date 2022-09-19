import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';
import { plainToClass } from 'class-transformer';
import { SerializedUser } from 'src/utils';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Tdogg', email: 'tdogg@tdogg.com', password: 'yomama123' },
    { username: 'Bdogg', email: 'bdogg@bdog.com', password: 'yomama123' },
    { username: 'GDogg', email: 'greg@gdog.com', password: 'yomama123' },
  ];
  fetchUsers() {
    // return this.fakeUsers;
    return this.fakeUsers.map((user) => plainToClass(SerializedUser, user));

  }

  getUsers() {
    return this.fakeUsers.map((user) => plainToClass(SerializedUser, user));
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}