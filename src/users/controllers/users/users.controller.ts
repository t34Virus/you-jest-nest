import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy)
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
                username: 'Zysberg',
                email: 'Zysberg@Zysberg.com'
            }
        ]
    }

    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData.email);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log(id);
        return { id };
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
