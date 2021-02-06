import { Module } from '@nestjs/common';
import { BootstrapingSolutionController } from './bootstraping-solution.controller';
import { BootstrapingSolutionService } from './bootstraping-solution.service';

@Module({
  imports: [],
  controllers: [BootstrapingSolutionController],
  providers: [BootstrapingSolutionService],
})
export class BootstrapingSolutionModule {}
