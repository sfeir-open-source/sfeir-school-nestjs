import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { TODOS_MOCKS_PROVIDER } from './todos-mocks.service';

describe('Todo', () => {
  let provider: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService, TODOS_MOCKS_PROVIDER],
    }).compile();

    provider = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
