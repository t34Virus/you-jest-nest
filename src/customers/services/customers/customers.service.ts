import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomers() {
        return {
            id: 69,
            email: 'toomuch@monay.com',
            createdAt: new Date()
        }
    }
}
