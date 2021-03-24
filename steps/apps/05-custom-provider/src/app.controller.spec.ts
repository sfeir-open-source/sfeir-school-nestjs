import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TODOS_LIST } from './shared/constants/todos-list';
import { TodoService } from './shared/providers/todo.service';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [TodoService],
    }).compile();

    controller = module.get<AppController>(AppController);
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
