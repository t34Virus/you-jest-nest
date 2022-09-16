import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get('customers')
    getCustomer() {
        return this.customersService.findCustomers();
    }
}
