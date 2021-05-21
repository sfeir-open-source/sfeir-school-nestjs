import { Test, TestingModule } from '@nestjs/testing';
import { AppLoggerService } from '../../../core/logger/logger.service';
import { RessourceNotFoundException } from '../../../shared/exception/not-found.exception';
import { Todo } from '../models/todo.model';
import { TodoService } from './todo.service';
import { TODOS_MOCKS, TODOS_MOCKS_PROVIDER } from './todos-mocks.service';

describe('Todo', () => {
  let provider: TodoService;
  let todoMocks: Array<Todo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService, AppLoggerService, TODOS_MOCKS_PROVIDER],
    }).compile();

    provider = module.get<TodoService>(TodoService);
    todoMocks = module.get<Array<Todo>>(TODOS_MOCKS);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should return the list of todos', () => {
    const todos = provider.getAllTodos();
    expect(todos).toEqual(todoMocks);
  });

  it('should return the todos with the id 1', () => {
    const todo = todoMocks.find(({ id }) => id === 1);
    expect(provider.getTodo(1)).toEqual(todo);
  });

  it('should return an error for an id which is not exist', () => {
    expect(() => provider.getTodo(10000)).toThrowError(new RessourceNotFoundException(10000));
  });

  it('should delete a todo with the id 1', () => {
    const initialLengthTodos: number = todoMocks.length;
    provider.deleteTodo(1);
    expect(todoMocks.length).toEqual(initialLengthTodos - 1);
  });

  it('should return an error if id is not exist', () => {
    expect(() => provider.getTodo(10000)).toThrowError(new RessourceNotFoundException(10000));
  });
});
