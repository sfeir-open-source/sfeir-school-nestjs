import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Array<Todo>> {
    return undefined;
  }
}
