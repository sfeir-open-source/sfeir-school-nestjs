# Qu'est ce qu'un Guards
- Une sorte de **Vigile** de route <br/><br/>
- Une classe précédée par annotation @Injectable implémentant l'interface CanActivate

##==##

# Comment ça fonctionne ? 
- Permet de retourner :
    - **boolean**<br/><br/>
    - **Promise<boolean>**<br/><br/>
    - **Observable<boolean>** <br/><br/>
    
- Si la valeur retournée est true -> le handler est exécuté <br/><br/>
- Si la valeur retournée est false -> le handler n'est pas exécuté

##==##

<!-- .slide: class="with-code inconsolata"-->
# Comment s'écrit un guard
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
<!-- .element: class="medium-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Ordre d’exécution
1. Avant tous interceptors et pipes <br/><br/>
2. Après chaque middleware <br/><br/>
