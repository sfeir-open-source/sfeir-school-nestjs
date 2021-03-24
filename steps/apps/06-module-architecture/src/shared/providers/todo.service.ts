import { Inject, Injectable } from '@nestjs/common';
import { Todo } from '../models/todo.model';
import { TODOS_MOCKS } from './todos-mocks.service';

@Injectable()
export class TodoService {
  constructor(@Inject(TODOS_MOCKS) private readonly todoList: Array<Todo>) {}

  getAllTodos(): Array<Todo> {
    return this.todoList;
  }

  getTodo(idTodo: number): Todo {
    return this.todoList.find(({ id }) => id === idTodo);
  }

  deleteTodo(idTodo: number): void {
    const indexTodo: number = this.todoList.findIndex(({ id }) => id === idTodo);
    this.todoList.splice(indexTodo, 1);
  }
}
