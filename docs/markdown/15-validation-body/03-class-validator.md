# Créer ses propres schéma de validation avec Class-Validators
<br><br>

- package à part de Nest Js <br><br>
- logique de class first <br><br>
- système basé sur les annotations <br><br>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Très bien et ça s'utilise comment tout ça ? Est-ce simple ?
<br><br>

```shell
npm install  class-validators class-transformers --save
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment écrire une DTO avec la librairie class-validators
<br><br><br>

```typescript
export class TodoCreationDTO {

  @IsString()
  title: string;

  @Equals(false)
  completed: boolean

}
```
<!-- .slide: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" --> 
# Validation de tableaux de valeurs

La validation d'un tableau est un peu particulière car elle demande d'utiliser un parser supplémentaire <br><br>

```typescript
createTodos(@Body() todos: Array<CreateTodoDTO>) {} 
```
<!-- .element: class="big-code" -->

<br><br>Ici la validation ne marchera pas correctement, voir pas du tout pour être exacte <br><br>

Ce qui nous donne la solution suivante <br><br>

```typescript
createTodos(@Body(new ParseArrayPipe({ items: CreateTodoDTO })))
```
<!-- .element: class="big-code" -->
