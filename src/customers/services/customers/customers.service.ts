import { Injectable } from '@nestjs/common';
import { CreateCustomerType } from 'src/utils/types';

@Injectable()
export class CustomersService {
    customers = [
        { id: 1, email: 'tdogg@tdogg.com', name: "tdogg tdogg" },
        { id: 2, email: 'bdogg@bdog.com', name: "bdogg bdogg" },
        { id: 3, email: 'greg@gdog.com', name: "greg greg" },
    ]

    findCustomerById(id: number) {
        return this.customers.find((customers) => 
        customers.id === id);
    }

    fetchCustomers() {
        return this.customers;
    }

    createCustomer(customerDetails: CreateCustomerType){
        this.customers.push(customerDetails);
        return;
    }
}
