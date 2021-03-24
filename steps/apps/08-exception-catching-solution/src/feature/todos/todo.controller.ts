import { Controller, Delete, Get, HttpCode, Param } from '@nestjs/common';
import { RessourceNotFoundException } from '../../shared/exception/not-found.exception';
import { Todo } from './models/todo.model';
import { TodoService } from './providers/todo.service';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id') idTodo: string): Todo | RessourceNotFoundException<string> {
    try {
      return this.todoService.getTodo(+idTodo) as Todo;
    } catch (error: any) {
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id') idTodo: string): void | RessourceNotFoundException<string> {
    try {
      this.todoService.deleteTodo(+idTodo);
      return;
    } catch (error) {
      throw error;
    }
  }
}
