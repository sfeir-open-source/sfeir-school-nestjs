import { Injectable } from '@nestjs/common';

@Injectable()
export class BootstrapingSolutionService {
  getHello(): string {
    return 'Hello World!';
  }
}
