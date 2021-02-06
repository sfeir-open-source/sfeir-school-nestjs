import { Test, TestingModule } from '@nestjs/testing';
import { BootstrapingController } from './bootstraping.controller';
import { BootstrapingService } from './bootstraping.service';

describe('BootstrapingController', () => {
  let bootstrapingController: BootstrapingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BootstrapingController],
      providers: [BootstrapingService],
    }).compile();

    bootstrapingController = app.get<BootstrapingController>(BootstrapingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bootstrapingController.getHello()).toBe('Hello World!');
    });
  });
});
