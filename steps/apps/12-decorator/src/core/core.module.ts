import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthorizationGuard } from './guards/authorization.guard';

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthorizationGuard }],
})
export class CoreModule {}
