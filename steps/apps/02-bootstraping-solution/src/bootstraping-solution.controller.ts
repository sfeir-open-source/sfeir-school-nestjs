import { Controller, Get } from '@nestjs/common';
import { BootstrapingSolutionService } from './bootstraping-solution.service';

@Controller()
export class BootstrapingSolutionController {
  constructor(private readonly bootstrapingSolutionService: BootstrapingSolutionService) {}

  @Get()
  getHello(): string {
    return this.bootstrapingSolutionService.getHello();
  }
}
