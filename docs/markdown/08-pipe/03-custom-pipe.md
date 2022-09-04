<!-- .slide: class="with-code inconsolata" -->
# Comment créer ses propres pipes
```typescript
import { PipeTransform, Injectable, ArgumentMetadata, NotAcceptableException } from '@nestjs/common';

@Injectable()
export class TodoValidationPipe implements PipeTransform {
  transform(value: Partial<Todo>, metadata: ArgumentMetadata): Partial<Todo> | NotAcceptableException {
    return value;
  }
}
```
<!-- .element: class="big-code" -->

##==##

# Heu les metadata ? C'est quoi ?
Il s'agit des metadatas de la fonction de l'argument <br/><br/>
- type : **@Body**/**@Query**/**@Param** <br/><br/>
- metatype: Metatype de l'argument <br/><br/>
- data: valeur passée au décorateur -> @Body('id') <br/><br/>

##==##

# Portée d'un pipe
- paramètre <br/><br/>
- méthode <br/><br/>
- controller <br/><br/>
- globale <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata"-->
# Enregistrement sur un paramètre
```typescript
@Post()
createTodo(@Body(TodoValidationPipe) body: Todo) : Todo | HttpException { }

@Post()
createTodo(@Body(new TodoValidationPipe()) body: Todo) : Todo | HttpException { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Sur une méthode ou un controller
```typescript
@Post()
@UsePipes(TodoValidationPipe)
createTodo(@Body() body: Todo): Todo | HttpException { }

@UsePipes(TodoValidationPipe)
@Controller('api/todos')
export class TodoController { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata"-->
# De manière globale
**Dans le fichier main.ts** <br/><br/>

```typescript
async function bootstrap() {
  const app = await NestFactory.create(BootstrapingSolutionModule);
  app.useGlobalPipes(new TodoValidationPipe());
  await app.listen(3000);
}
bootstrap();
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata"-->
# De manière globale
**Dans un module** <br/><br/>

```typescript
@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: TodoValidationPipe,
    },
  ],
})
export class AppModule {}
```
<!-- .element: class="big-code" -->


