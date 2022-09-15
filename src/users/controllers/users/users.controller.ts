import { Body, Controller, Get, Param, Post, Query, Req, Res, ValidationPipe, UsePipes, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
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
                username: 'Zysberg',
                email: 'Zysberg@Zysberg.com'
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
        console.log(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
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
