import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    line1: string;

    line2?: string;

    @IsNumberString()
    @IsNotEmpty()
    zip: string;

    @IsNotEmpty()
    city: string;
    @IsNotEmpty()
    state: string;
}