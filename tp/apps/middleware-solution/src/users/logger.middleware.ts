import { Injectable, NestMiddleware } from '@nestjs/common';
import { json } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('****************************************************************');
    console.log('# ROUTE :');
    console.log(req.route);
    console.log('# BODY :');
    console.log(req.body);
    next();
  }
}
