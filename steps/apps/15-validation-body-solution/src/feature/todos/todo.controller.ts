import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotAcceptableException,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { RessourceNotFoundException } from '../../shared/exception/not-found.exception';
import { TodoDto } from './dto/todo.dto';
import { TodosInterceptor } from './interceptors/get-todos.interceptor';
import { Todo } from './models/todo.model';
import { TodoService } from './providers/todo.service';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @HttpCode(200)
  @UseInterceptors(TodosInterceptor)
  getAllTodos(): Array<Todo> {
    return this.todoService.getAllTodos();
  }

  @Post()
  @HttpCode(201)
  createTodo(@Body() todo: TodoDto): number | NotAcceptableException {
    return this.todoService.createTodo(todo);
  }

  @Get(':id')
  @HttpCode(200)
  @UseInterceptors(TodosInterceptor)
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
