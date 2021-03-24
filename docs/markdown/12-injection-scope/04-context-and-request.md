<!-- .slide: class="with-code inconsolata" -->
# Comment récupérer l'instance de la requête en cours ?

Pour un serveur Nest Http, parfois il peut être utile de récupérer l'instance de la requête quand vous êtes dans un scope de type requête <br><br>

```typescript
@Injectable({ scope: Scope.REQUEST })
export class TodoService {
    constructor(@Inject(Request) private readonly request) {}
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata"-->
# Comment récupérer le contexte de la requête en cours ?

Pour un serveur Nest Js type gateway ou microservice, ça ne fait pas se sens de récupérer l'instance de la requête mais plus de sens de récupérer le context <br> <br>

```typescript
@Injectable({ scope: Scope.REQUEST })
export class TodoService {
  constructor(@Inject(CONTEXT) private context) {}
}
```
<!-- .element: class="big-code" -->

##==##

# Scope Bubbling

TodosController <-- TodosService <-- TodosRepository <br><br>

Imaginons TodosService est de type scope Request <br><br>

**Le Bubbling** va répercuter son scope au controller. Le scope du sercice TodosRepository n'est pas impacté
