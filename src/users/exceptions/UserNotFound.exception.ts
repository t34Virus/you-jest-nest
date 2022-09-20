import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
    constructor(msg?: string, status?: HttpStatus) {
        super(msg || 'User Not FOund', status || HttpStatus.BAD_REQUEST);
    }
}