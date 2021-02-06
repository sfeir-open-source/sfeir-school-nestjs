import { NestFactory } from '@nestjs/core';
import { BootstrapingSolutionModule } from './bootstraping-solution.module';

async function bootstrap() {
  const app = await NestFactory.create(BootstrapingSolutionModule);
  await app.listen(3000);
}
bootstrap();
