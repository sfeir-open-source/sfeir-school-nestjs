import { NotAcceptableException } from '@nestjs/common';
import { Todo } from '../models/todo.model';
import { TodoCreationValidationPipe } from './todo-creation-validation.pipe';

describe('TodoValidationPipe', () => {
  let validationPipe: TodoCreationValidationPipe;
  beforeEach(() => {
    validationPipe = new TodoCreationValidationPipe();
  });

  test('should be an instance of TodoValidationPipe', () => {
    expect(validationPipe).toBeInstanceOf(TodoCreationValidationPipe);
  });

  test('should return the body that user send', () => {
    const todo: Omit<Todo, 'id'> = { userId: 1, completed: false, title: 'un titre' };
    expect(validationPipe.transform(todo)).toEqual(todo);
  });

  test('should return an not acceptable exception if userId !== 1', () => {
    const todo: Omit<Todo, 'id'> = { userId: 2, completed: false, title: 'un titre' };
    expect(() => validationPipe.transform(todo)).toThrowError(new NotAcceptableException());
  });

  test('should return a not acceptable exception if completed params is not false', () => {
    const todo: Omit<Todo, 'id'> = { userId: 1, completed: true, title: 'un titre' };
    expect(() => validationPipe.transform(todo)).toThrowError(new NotAcceptableException());
  });

  test('should return a not acceptable exception if title is emplty', () => {
    const todo: Omit<Todo, 'id'> = { userId: 1, completed: true, title: '' };
    expect(() => validationPipe.transform(todo)).toThrowError(new NotAcceptableException());
  });
});
