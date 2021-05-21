import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { cookies } from './middleware/cookies.middleware';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookies).forRoutes({ path: 'api/user/sign-in', method: RequestMethod.POST });
  }
}
