import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Post,
    Query,
    Req,
    Res,
    UseGuards,
    UsePipes,
    ValidationPipe,
    Inject,
    UseInterceptors,
    ClassSerializerInterceptor
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/utils';
  import { CreateUserDto } from '../../dtos/CreateUser.dto';
  import { AuthGuard } from '../../guards/auth.guard';
  import { ValidateCreateUserPipe } from '../../pipes/validate-create-user.pipe';

  
  @Controller('users')
  export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {}
  
    @Get()
    getUsers() {
      return this.userService.fetchUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username')
    getByUsername(@Param('username') username: string) {
      const user = this.userService.getUserByUsername(username);
      console.log(user);
      if (user) return new SerializedUser(user);
      else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    @Get('serialize')
    hidePasswords() {
      return this.userService.getUsers();
    }
 
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
      const user = this.userService.fetchUserById(id);
      if (!user)
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      return user;
    }

    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
    //   console.log(userData.age.toPrecision());
      return this.userService.createUser(userData);
    }

  }