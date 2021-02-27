import { Provider } from '@nestjs/common';
import { TODOS_LIST } from '../constants/todos-list';

export const TODOS_MOCKS = 'TODOS';

export const TODOS_MOCKS_PROVIDER: Provider = {
  provide: TODOS_MOCKS,
  useValue: TODOS_LIST,
};
