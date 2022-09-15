import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'

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

    @Post()
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send('Created');
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
