import { Test, TestingModule } from '@nestjs/testing';
import { TODOS_LIST } from './constants/todos-list';
import { TodoService } from './providers/todo.service';
import { TODOS_MOCKS_PROVIDER } from './providers/todos-mocks.service';
import { TodoController } from './todo.controller';

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService, TODOS_MOCKS_PROVIDER],
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all todos', () => {
    expect(controller.getAllTodos()).toEqual(TODOS_LIST);
  });

  it('should return a particular todo', () => {
    const params = '1';
    const particularTodo = TODOS_LIST.find(({ id }) => id === +params);
    expect(controller.getTodo(params)).toEqual(particularTodo);
  });

  it('should remove a particular todo', () => {
    const params = '1';
    expect(controller.removeTodo(params)).toBeUndefined();
  });
});
