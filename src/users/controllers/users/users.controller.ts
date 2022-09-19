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
    Inject
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import { UsersService } from 'src/users/services/users/users.service';
  import { CreateUserDto } from '../../dtos/CreateUser.dto';
  import { AuthGuard } from '../../guards/auth.guard';
  import { ValidateCreateUserPipe } from '../../pipes/validate-create-user.pipe';

  
  @Controller('users')
  export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {}
  
    @Get()
    // @UseGuards(AuthGuard)
    getUsers() {
      return this.userService.fetchUsers();
    }
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    //   console.log(userData.age.toPrecision());
      return this.userService.createUser(userData);
    }
  
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
      const user = this.userService.fetchUserById(id);
      if (!user)
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      return user;
    }

    @Get('serialize')
    hidePasswords() {
      return this.userService.getUsers();
    }

  }