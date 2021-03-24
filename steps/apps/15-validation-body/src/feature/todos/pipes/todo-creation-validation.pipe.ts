import { Injectable, NotAcceptableException, PipeTransform } from '@nestjs/common';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoCreationValidationPipe implements PipeTransform {
  transform(value: Omit<Todo, 'id'>): Partial<Todo> | NotAcceptableException {
    const { userId, title, completed } = value;
    if (userId === 1 && !!title.trim() && completed === false) {
      return value;
    }
    throw new NotAcceptableException();
  }
}
