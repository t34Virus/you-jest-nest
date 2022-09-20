import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;
    
    // @IsNotEmpty()
    // age: number;
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    id: number;
}