import { Type } from "class-transformer";
import { IsNotEmpty, IsEmail, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {
    @IsEmail()
    email: string;

    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @ValidateNested()
        @Type(() => CreateAddressDto)

    address: CreateAddressDto; 
}