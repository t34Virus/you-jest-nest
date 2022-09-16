import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'testuser123',
      database: 'nestjs_mysql_tutorial',
      entities: [],
      synchronize: true,

    })
  ],
  controllers: [
    AppController,
    UsersController
  ],
  providers: [
    AppService,
    UsersService
  ],
})
export class AppModule {}
