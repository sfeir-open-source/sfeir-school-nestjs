import { Global, Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { RessourceNotFoundExceptionFilter } from './exception/not-found-catching.exception';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AppLoggerService } from './logger/logger.service';

@Global()
@Module({
  providers: [
    { provide: APP_GUARD, useClass: AuthorizationGuard },
    {
      provide: APP_FILTER,
      useClass: RessourceNotFoundExceptionFilter,
    },
    AppLoggerService,
  ],
  exports: [AppLoggerService],
})
export class CoreModule {}
