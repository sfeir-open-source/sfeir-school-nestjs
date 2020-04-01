<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Guards

##==##
# Guards
Les guards ont pour seul but de gérer la partie authorization basé sur des conditions comme les permissions, les rôles, les ACL.

Les guards sont exécutés après chaque middleware, mais avant tout intercepteur ou pipe.

![full-width](./assets/images/g5c833a2249_0_277.png)


##==##
<!-- .slide: class="with-code" -->

# Authorization guard

Dans l’exemple ci-dessous, il est possible de valider la request de manière simple ou plus complexe avec la méthode validateRequest.

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

##==##
<!-- .slide: class="with-code" -->

# Sur un controller
Utilisation de l’annotation @UseGuards

```typescript
@Controller('demos')
@UseGuards(AuthGuard)
export class DemosController {}
```

##==##
<!-- .slide: class="with-code" -->

# Au niveau global
```typescript
async function bootstrap() {
     const app = await NestFactory.create(ApplicationModule);
     app.useGlobalGuards(new AuthGuard());
     await app.listen(3000);
   }
   bootstrap();
```



