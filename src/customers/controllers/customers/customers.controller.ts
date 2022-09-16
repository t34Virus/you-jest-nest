import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get('customers')
    getCustomer() {
        return {
            id: 69,
            email: 'toomuch@monay.com',
            createdAt: new Date()
        }
    }
}
