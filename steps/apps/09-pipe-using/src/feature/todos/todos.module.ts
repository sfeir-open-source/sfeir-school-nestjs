import { Module } from '@nestjs/common';
import { TodoService } from './providers/todo.service';
import { TODOS_MOCKS_PROVIDER } from './providers/todos-mocks.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TODOS_MOCKS_PROVIDER, TodoService],
})
export class TodosModule {}
