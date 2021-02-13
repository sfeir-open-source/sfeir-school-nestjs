import { Controller, Get, HttpCode } from '@nestjs/common';
import { TODOS_LIST } from './shared/constants/todos-list';
import { Todo } from './shared/models/todo.model';

@Controller('/api/todos')
export class AppController {
  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return TODOS_LIST;
  }
}
