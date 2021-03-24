import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RessourceNotFoundExceptionFilter } from './shared/exception/not-found-catching.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RessourceNotFoundExceptionFilter());
  await app.listen(3000);
}

bootstrap();
