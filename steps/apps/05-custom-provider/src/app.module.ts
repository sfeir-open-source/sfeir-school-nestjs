import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoService } from './shared/providers/todo.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TodoService],
})
export class AppModule {}
