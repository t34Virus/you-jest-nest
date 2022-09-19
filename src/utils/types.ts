import { CreateAddressDto } from "src/customers/dtos/CreateAddress.dto";

export type CreateUserType = {
    username: string;
    email: string;
    password: string;
  };

  export type CreateCustomerType = {
    name: string;
    email: string;
    id: number;
    address: CreateAddressDto;
  };  