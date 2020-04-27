import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UserModule {}
