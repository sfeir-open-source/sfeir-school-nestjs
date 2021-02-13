import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TODOS_LIST } from './shared/constants/todos-list';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all todos', () => {
    expect(controller.getAllTodos()).toEqual(TODOS_LIST);
  });
});
