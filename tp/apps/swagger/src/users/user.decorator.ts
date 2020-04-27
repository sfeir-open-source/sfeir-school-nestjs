import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
  console.log(data);
  const request = ctx.switchToHttp().getRequest();
  const query = request.query;

  console.log(query[data]);
  return data ? query && query[data] : query;
});
