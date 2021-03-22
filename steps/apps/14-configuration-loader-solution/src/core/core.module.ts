import { Global, Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AppConfigurationModule } from './configuration/configuration.module';
import { RessourceNotFoundExceptionFilter } from './exception/not-found-catching.exception';
import { AuthorizationGuard } from './guards/authorization.guard';
import { AppLoggerService } from './logger/logger.service';

@Global()
@Module({
  imports: [AppConfigurationModule],
  providers: [
    { provide: APP_GUARD, useClass: AuthorizationGuard },
    {
      provide: APP_FILTER,
      useClass: RessourceNotFoundExceptionFilter,
    },
    AppLoggerService,
  ],
  exports: [AppConfigurationModule, AppLoggerService],
})
export class CoreModule {}
