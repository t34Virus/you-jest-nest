import { Controller, Get, ParseIntPipe, Param, ValidationPipe, HttpException, HttpStatus, Post, Body, UsePipes, Req, Res } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { ValidateCreateCustomerPipe } from 'src/customers/pipes/validate-create-customer.pipe';
import { Request, Response } from 'express';


@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get('')
    getAllCustomers() {
        return this.customersService.fetchCustomers();
    }

    @Get(':id')
    getCustomerById(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: Request,
        @Res() res: Response,
        ) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(400).send({ msg: 'Customer not found!' });
            // throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
        }
        // return customer;
    }
    
    @Get('/search/:id')
    getCustomer(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (!customer)
            throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
        return customer;
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createCustomer(@Body(ValidateCreateCustomerPipe) createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }
}
