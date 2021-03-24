import { Module } from '@nestjs/common';
import { TodosModule } from './feature/todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
