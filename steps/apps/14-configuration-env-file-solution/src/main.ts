import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLoggerService } from './core/logger/logger.service';

let loggerService: AppLoggerService = undefined;
let configService: ConfigService = undefined;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  configService = app.get(ConfigService);
  loggerService = await app.resolve(AppLoggerService);
  app.useLogger(loggerService);
  await app.listen(configService.get<number>('PORT'));
}

bootstrap().then(() => {
  loggerService.setContext('Server');
  loggerService.log(`is running on the host : localhost`);
  loggerService.log(`is running on the port : ${configService.get<number>('PORT')}`);
});
