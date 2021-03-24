import { Test, TestingModule } from '@nestjs/testing';
import { BootstrapingSolutionController } from './bootstraping-solution.controller';
import { BootstrapingSolutionService } from './bootstraping-solution.service';

describe('BootstrapingSolutionController', () => {
  let bootstrapingSolutionController: BootstrapingSolutionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BootstrapingSolutionController],
      providers: [BootstrapingSolutionService],
    }).compile();

    bootstrapingSolutionController = app.get<BootstrapingSolutionController>(BootstrapingSolutionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bootstrapingSolutionController.getHello()).toBe('Hello World!');
    });
  });
});
