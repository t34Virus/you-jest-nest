import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/User'
import { UsersController } from './controllers/users/users.controller';
import { AnotherMiddlewareMiddleware } from './middleware/another-middleware.middleware';
import { ExampleMiddleware } from './middleware/example.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [ UsersService ]
})
export class UsersModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AnotherMiddlewareMiddleware).forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET
        }
      ).apply(AnotherMiddlewareMiddleware).forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET
        }
      )
    }
}
