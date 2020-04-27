import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './shared/logger.middleware';
import { ValidationPipe } from "@nestjs/common";
import { LoggingInterceptor } from "./shared/logging.interceptor";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(logger);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
