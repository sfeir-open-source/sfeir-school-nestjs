import { Module } from '@nestjs/common';
import { TodosModule } from './feature/todos/todos.module';
import { UserModule } from './feature/user/user.module';

@Module({
  imports: [TodosModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
