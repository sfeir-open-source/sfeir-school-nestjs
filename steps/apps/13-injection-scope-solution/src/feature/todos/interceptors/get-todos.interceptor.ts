import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Array<Todo> | Todo> {
    return next.handle().pipe(
      map((todo: Array<Todo> | Todo) =>
        Array.isArray(todo)
          ? todo.map((todo) => ({
              ...todo,
              username: 'sfeir',
            }))
          : { ...todo, username: 'sfeir' },
      ),
    );
  }
}
