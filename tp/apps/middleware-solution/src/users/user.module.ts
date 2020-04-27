import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  imports: [],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'api/users(.*)', method: RequestMethod.GET},
        {path: 'api/users', method: RequestMethod.DELETE}
        )
      .forRoutes(UsersController);
  }
}
