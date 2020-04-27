import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './shared/logger.middleware';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(logger);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
