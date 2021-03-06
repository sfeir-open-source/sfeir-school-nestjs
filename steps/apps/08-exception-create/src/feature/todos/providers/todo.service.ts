import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from '../models/todo.model';
import { TODOS_MOCKS } from './todos-mocks.service';

@Injectable()
export class TodoService {
  constructor(@Inject(TODOS_MOCKS) private readonly todoList: Array<Todo>) {}

  getAllTodos(): Array<Todo> {
    return this.todoList;
  }

  getTodo(idTodo: number): Todo | Error {
    const todo: Todo = this.todoList.find(({ id }) => id === idTodo);
    if (todo) {
      return todo;
    }
    throw new NotFoundException();
  }

  deleteTodo(idTodo: number): void | Error {
    const indexTodo: number = this.todoList.findIndex(({ id }) => id === idTodo);
    if (indexTodo === -1) throw new NotFoundException();
    this.todoList.splice(indexTodo, 1);
  }
}
