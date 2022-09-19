import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Hello, World. I m inside ValidateCustomerMiddleware');
        next();
    }
}