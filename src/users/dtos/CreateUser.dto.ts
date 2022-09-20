import { IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @MinLength(10)
    password: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    // @IsNotEmpty()
    // age: number;

    // @IsNotEmpty()
    id: number;
}