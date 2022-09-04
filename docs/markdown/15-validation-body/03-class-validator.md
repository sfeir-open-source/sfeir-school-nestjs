# Créer ses propres schéma de validation avec Class-Validators
- package à part de Nest Js <br/><br/>
- logique de class first <br/><br/>
- système basé sur les annotations <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Très bien et ça s'utilise comment tout ça ? Est-ce simple ?
```bash
npm install  class-validators class-transformers --save
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment écrire une DTO avec la librairie class-validators
```typescript
export class TodoCreationDTO {
  @IsString()
  title: string;
  @Equals(false)
  completed: boolean
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column with-code inconsolata" -->
## Utiliser notre DTO
**Dans le fichier main.ts** <br/><br/><br/><br/>

```typescript
app.useGlobalPipes(new ValidationPipe({ transform: true }));
```
<!-- .element: class="big-code" -->

##--##

## Utiliser notre DTO
<!-- .slide: class="with-code inconsolata" -->
**Dans un de vos controller** <br/><br/><br/><br/>

```typescript
createTodo(@Body() todo: TodoCreationDTO)
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code inconsolata" --> 
# Validation de tableaux de valeurs

La validation d'un tableau est un peu particulière car elle demande d'utiliser un parser supplémentaire <br/><br/>

```typescript
createTodos(@Body() todos: Array<TodoCreationDTO>) {} 
```
<!-- .element: class="big-code" -->

<br/><br/>Ici la validation ne marchera pas correctement, voir pas du tout pour être exacte <br/><br/>

Ce qui nous donne la solution suivante <br/><br/>

```typescript
createTodos(@Body(new ParseArrayPipe({ items: TodoCreationDTO })))
```
<!-- .element: class="big-code" -->
