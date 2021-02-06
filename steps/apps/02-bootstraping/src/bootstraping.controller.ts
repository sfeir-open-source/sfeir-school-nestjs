import { Controller, Get } from '@nestjs/common';
import { BootstrapingService } from './bootstraping.service';

@Controller()
export class BootstrapingController {
  constructor(private readonly bootstrapingService: BootstrapingService) {}

  @Get()
  getHello(): string {
    return this.bootstrapingService.getHello();
  }
}
