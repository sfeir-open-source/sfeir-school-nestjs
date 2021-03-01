import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Cookies = createParamDecorator((data: string, context: ExecutionContext) => {
  return undefined;
});
