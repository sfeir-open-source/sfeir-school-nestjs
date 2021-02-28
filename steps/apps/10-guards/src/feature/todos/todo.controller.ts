import { Body, Controller, Delete, Get, HttpCode, NotAcceptableException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RessourceNotFoundException } from '../../shared/exception/not-found.exception';
import { Todo } from './models/todo.model';
import { TodoCreationValidationPipe } from './pipes/todo-creation-validation.pipe';
import { TodoService } from './providers/todo.service';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Post()
  @HttpCode(201)
  createTodo(@Body(TodoCreationValidationPipe) todo: Omit<Todo, 'id'>): number | NotAcceptableException {
    return this.todoService.createTodo(todo);
  }

  @Get(':id')
  @HttpCode(200)
  getTodo(@Param('id', ParseIntPipe) idTodo: number): Todo | RessourceNotFoundException<string> {
    try {
      return this.todoService.getTodo(idTodo) as Todo;
    } catch (error: any) {
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(200)
  removeTodo(@Param('id', ParseIntPipe) idTodo: number): void | RessourceNotFoundException<string> {
    try {
      this.todoService.deleteTodo(idTodo);
      return;
    } catch (error) {
      throw error;
    }
  }
}
