import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Http2ServerRequest } from 'http2';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Http2ServerRequest>();
    if (request.url.includes('sign-in')) {
      return true;
    }
    return AuthorizationGuard.hasCookies(request.headers.cookie);
  }

  private static hasCookies(cookies: string): boolean {
    return cookies?.includes('userToken');
  }
}
