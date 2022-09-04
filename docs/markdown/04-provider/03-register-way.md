# Il existe différentes manières d’enregistrer un provider
- Par valeur <br/><br/>
- Par classe <br/><br/>
- Par fonction

##==##

<!-- .slide: class="with-code inconsolata"-->
# Par Valeur

```typescript
@Module({
  providers: [{ provide: 'mocksData', useValue: 'Nicolas' }]  
})
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript
@Controller()
export class TodoController {
  constructor(@Inject('mocksData') private readonly todoMockData: Todo[]) {}
}
```
<!-- .element: class="big-code" -->

Notes:
Ici on provide un element qui n'est pas une class annotée de l'annotation @Injectable ce qui nous force à utilser l'annotation @Inject
Si nous avions providé une class, cette annotation serait inutile

##==##

<!-- .slide: class="with-code inconsolata"-->
# Par Classe

```typescript
@Module({
  providers: [{ provide: UserService, useClass: process.env.NODE_ENV === 'LCL' ? UserMock : UserDataBase }]  
})
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript
@Controller()
export class TodoController {
  constructor(private readonly userService: UserService) {}
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata"-->
# Par Factory
La factory est très utile quand on souhaite réaliser un métier plus compliqué ou quelque chose d'asynchrone

<br/><br/>

```typescript
@Module({
  providers: [{
    provide: UserService,
    useFactory: (configService: ConfigService) =>
        configService.env === 'LCL' ? UserMock : UserDataBase, 
    deps:[ConfigService] }]  
})
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" --> 
# Utiliser un service qui existe déjà
Parfois il peut être utile de déclarer un service qui aura pour valeur un service existant.

C'est ici que la notion de useExisting prend tout son sens

<br/><br/>

```typescript
@Module({
    providers: [{
      provide: 'todoService',
      useExisting: TodosService }]
})
```
<!-- .element: class="big-code" -->
