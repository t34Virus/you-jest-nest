import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Example Middleware');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;

    if (!authorization) throw new HttpException('No Authorization Token', HttpStatus.FORBIDDEN)

    if (authorization === 'yomama') next();
    else throw new HttpException('Invalid Token', HttpStatus.FORBIDDEN)
  }
}
