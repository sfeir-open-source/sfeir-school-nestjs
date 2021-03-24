# Qu'est ce qu'un interceptor
**Un interceptor est une classe implémentant l'interface NestInterceptor et précédée de l'annotation @Injectable()**<br><br>
![h-800](assets/images/school/10-interceptors/interceptors.png)

##==##

# A quoi sert un interceptor ?
<br><br>

- ajouter de la logique avant ou après un handler <br><br>
- Transformer le résultat d'une fonction <br><br>
- Transformer une exception <br><br>
- Modifier la logique d'une requêtre (exemple de catching) <br><br>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment écrit-on un interceptor ?
<br><br>

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }
}
```
<!-- .element: class="big-code" -->

##==##

# Qu'est ce que le callHandler ?
<br><br>

- il permet d'appeler le request handler <br><br>
- Renvoie un observable <br></br>
- Permet d'utiliser l'ensemble des opérateurs rxjs pour modifier à souhait sa réponse
