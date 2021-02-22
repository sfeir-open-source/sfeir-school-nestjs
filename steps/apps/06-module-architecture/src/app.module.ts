import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoService } from './shared/providers/todo.service';
import { TODOS_MOCKS_PROVIDER } from './shared/providers/todos-mocks.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TodoService, TODOS_MOCKS_PROVIDER],
})
export class AppModule {}
