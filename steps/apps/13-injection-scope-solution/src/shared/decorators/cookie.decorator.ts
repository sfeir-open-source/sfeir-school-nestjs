import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Http2ServerRequest } from 'http2';

export const Cookies = createParamDecorator((data: string, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<Http2ServerRequest>();
  const cookies = request.headers.cookie?.split(';') || [];
  const cookiesObject = cookies.reduce((acc: Record<string, string>, currentValue: string) => {
    const [key, value] = currentValue.split('=');
    return { ...acc, [key]: value };
  }, {} as Record<string, string>);

  return data ? cookiesObject[data] : cookiesObject;
});
