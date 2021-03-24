import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { RessourceNotFoundException } from '../../shared/exception/not-found.exception';
import { AppLoggerService } from '../logger/logger.service';

@Catch(RessourceNotFoundException)
export class RessourceNotFoundExceptionFilter implements ExceptionFilter {
  constructor(private readonly loggerService: AppLoggerService) {}

  catch(exception: HttpException, host: ArgumentsHost): Response {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    const [, , endpoint] = request.path.split('/');

    this.loggerService.error(`Ressource not found ${request.params.id}`);

    return response.status(exception.getStatus()).json({
      ...exception,
      time: new Date(),
      endpoint: request.url,
      description: `It seems that the ${endpoint} with the id ${request.params.id} doest not existes in our database. Please contact the support`,
    });
  }
}
