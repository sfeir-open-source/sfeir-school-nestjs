import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLoggerService } from './core/logger/logger.service';

let loggerService: AppLoggerService = undefined;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  loggerService = await app.resolve(AppLoggerService);
  app.useLogger(loggerService);
  await app.listen(3000);
}

bootstrap().then(() => {
  loggerService.setContext('Server');
  loggerService.log(`is running on the host : localhost`);
});
