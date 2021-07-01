# A quoi sert le provider 

- Concept fondamental de Nest JS <br><br>
- Injecter des dépendances (classes,valeur, fonction etc) <br><br>
- Créer des relations entre objets <br><br>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Qu'est ce qu'un provider ?
__Un provider est une simple classe précédée de l'annotation @Injectable__ <br><br>

```typescript
@Injectable()
export class AppService {}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Où s'enregistre un provider

__Un provider s'enregistre toujours dans le tableau des providers d'un module__ <br><br>

```typescript
@Module({
  providers: [AppService]  
})
export class AppModule { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment utiliser un service dans un controller

__Il faut l'injecter__ <br><br>

```typescript
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
}
```
<!-- .element: class="big-code" -->

