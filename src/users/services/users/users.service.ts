import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User} from 'src/utils';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity} from '../../../typeorm/User'

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  private users: User[] = [];

  fetchUsers() {
    return this.users;
    // return this.users.map((user) => plainToClass(SerializedUser, user));

  }

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  createUser(userDetails: CreateUserType) {
    this.users.push(userDetails);
    return;
  }

  createUserDto(createUserDto: CreateUserDto) {

  }

  fetchUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  getUserByUsername(username: string) {
    return this.users.find((users) => 
    users.username == username);
  }
}