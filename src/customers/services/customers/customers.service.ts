import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [
        { id: 1, email: 'tdogg@tdogg.com', createdAt: new Date() },
        { id: 2, email: 'bdogg@bdog.com', createdAt: new Date() },
        { id: 3, email: 'greg@gdog.com', createdAt: new Date() },
    ]
    findCustomerById(id: number) {
        return this.users.find((user) => 
        user.id === id);
    }
}
