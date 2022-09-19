import { Controller, Get, ParseIntPipe, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (!customer)
            throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
        return customer;
    }
}
