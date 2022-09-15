import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return [
            {
                username: 'Teresa',
                email: 'teresa@teresa.com'
            }
        ]
    }

    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData.email);
        return {};
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
