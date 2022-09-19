import { Controller, Get, ParseIntPipe, Param, ValidationPipe, HttpException, HttpStatus, Post, Body, UsePipes } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get('')
    getAllCustomers() {
        return this.customersService.fetchCustomers();
    }

    @Get('/search/:id')
    getCustomer(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (!customer)
            throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
        return customer;
    }

    @Post('create')
    // @UsePipes(new ValidationPipe())
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }
}
