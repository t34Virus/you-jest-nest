import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateCustomerDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;
}