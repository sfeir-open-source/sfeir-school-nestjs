import { Controller, Delete, Get, HttpCode, Param } from '@nestjs/common';
import { TODOS_LIST } from './shared/constants/todos-list';
import { Todo } from './shared/models/todo.model';

@Controller('/api/todos')
export class AppController {
  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return TODOS_LIST;
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id') idTodo: string): Todo {
    return TODOS_LIST.find(({ id }) => id === +idTodo);
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id') idTodo: string): void {
    const indexTodo: number = TODOS_LIST.findIndex(({ id }) => id === +idTodo);
    TODOS_LIST.splice(indexTodo, 1);
    return;
  }
}
