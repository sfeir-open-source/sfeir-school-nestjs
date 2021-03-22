import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { resolve } from 'path';
import { RessourceNotFoundExceptionFilter } from './exception/not-found-catching.exception';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AppLoggerService } from './logger/logger.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, 'environments', 'local.env'),
    }),
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthorizationGuard },
    {
      provide: APP_FILTER,
      useClass: RessourceNotFoundExceptionFilter,
    },
    AppLoggerService,
  ],
  exports: [AppLoggerService, ConfigModule],
})
export class CoreModule {}
