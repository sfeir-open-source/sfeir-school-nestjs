import { Injectable } from '@nestjs/common';

@Injectable()
export class BootstrapingService {
  getHello(): string {
    return 'Hello World!';
  }
}
