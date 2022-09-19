import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/services/users/users.service';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    UsersModule,
    CustomersModule
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
