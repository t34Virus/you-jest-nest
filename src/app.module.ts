import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/services/users/users.service';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './utils';

@Module({
  imports: [
    UsersModule,
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tutorial_db',
      entities: entities,
      synchronize: true   
   })
  ],
  controllers: [
    AppController,
    UsersController
  ],
  providers: [
    AppService,
    // UsersService,
    {
      provide: 'USER_SERVICE',
      useClass: UsersService 
    }
  ],
})
export class AppModule {}
