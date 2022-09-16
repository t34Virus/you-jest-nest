import { Body, Controller, Get, Param, Post, Query, Req, Res, ValidationPipe, UsePipes, ParseIntPipe, ParseBoolPipe, HttpStatus,  HttpException } from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
        console.log(sortDesc)
        return [
            {
                username: 'Teresa',
                email: 'teresa@teresa.com'
            },
            {
                username: 'Johhny',
                email: 'Johhny@Johhny.com'
            },
            {
                username: 'Bergie',
                email: 'Bergie@Bergie.com'
            }
        ]
    }

    @Get('service') 
    getUsersWithService(){
        return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe)
    createUser(@Body() userData: CreateUserDto) {
        this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);
        if (!user) 
            throw new HttpException('User not found.', HttpStatus.BAD_REQUEST)
        return user;
    }

    @Get('posts')
    getUsersPosts() {
        return [
            {
                username: 'Teresa',
                email: 'teresa@teresa.com',
                posts: [
                    {
                        id: 1,
                        title: 'Post 1'
                    },
                    {
                        id: 2,
                        title: 'Post 2'
                    },
                    {
                        id: 3,
                        title: 'Post 3'
                    }
                ]
            }
        ]
    }
}
