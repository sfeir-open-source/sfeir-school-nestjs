import { Inject, Injectable } from '@nestjs/common';
import { AppLoggerService } from '../../../core/logger/logger.service';
import { RessourceNotFoundException } from '../../../shared/exception/not-found.exception';
import { TodoDto } from '../dto/todo.dto';
import { Todo } from '../models/todo.model';
import { TODOS_MOCKS } from './todos-mocks.service';

@Injectable()
export class TodoService {
  constructor(@Inject(TODOS_MOCKS) private readonly todoList: Array<Todo>, private readonly loggerService: AppLoggerService) {
    loggerService.setContext('TODOS-ENDPOINT');
  }

  getAllTodos(): Array<Todo> {
    this.loggerService.log('Fetch TODOS');
    return this.todoList;
  }

  createTodo(todo: TodoDto): number {
    this.loggerService.log('CREATE TODO');
    const idTodo = this.todoList.length + 1;
    this.todoList.push({ ...todo, id: idTodo });
    return idTodo;
  }

  getTodo(idTodo: number): Todo | Error {
    this.loggerService.log(`FETCH TODO ${idTodo}`);
    const todo: Todo = this.todoList.find(({ id }) => id === idTodo);
    if (todo) {
      return todo;
    }
    throw new RessourceNotFoundException(idTodo);
  }

  deleteTodo(idTodo: number): void | Error {
    this.loggerService.log(`DELETE TODO ${idTodo}`);
    const indexTodo: number = this.todoList.findIndex(({ id }) => id === idTodo);
    if (indexTodo === -1) throw new RessourceNotFoundException(idTodo);
    this.todoList.splice(indexTodo, 1);
  }
}
