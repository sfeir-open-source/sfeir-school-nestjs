import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { TodosModule } from './feature/todos/todos.module';
import { UserModule } from './feature/user/user.module';

@Module({
  imports: [CoreModule, TodosModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
