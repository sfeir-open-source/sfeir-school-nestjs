# Qu'est ce qu'une exception dans Nest Js

**Une exception est un filtre qui permet d'envoyer une réponse 'user friendly' en cas d'erreur Http**
<!-- .element: class="full-center" -->

##==##

# Les "build-in" exceptions

- Nest catch toutes les HttpExceptions et vous offre une mulitude d'exceptions à utiliser
    - **BadRequestException**
    - **UnauthorizedException**
    - **NotFoundException**
    - **ForbiddenException**
    - **... et bien d'autres :)** <br><br>
    
- une exception est une simple classe qui étend la class HttpException

##==##

<!-- .slide: class="with-code inconsolata"-->
# Créer ses propres exceptions, comment faire ?

- Théoriquement les "build-in" se suffisent en eux même **mais**
- Créer ses propres exceptions c'est possible !
- **Best Practice** : réaliser une hiérarchie de vos custom exceptions <br><br><br>

```typescript
export class notTodoFindException extends HttpException {
  constructor() {
    super('Todo with this id does not exist', 404)
  }
}
```
<!-- .element: class="big-code"-->
