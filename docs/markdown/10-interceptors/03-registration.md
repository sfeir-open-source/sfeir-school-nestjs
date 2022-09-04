# Comment enregistre t'on un interceptor?
- 3 manières : <br/><br/>
    - Scope handler<br/><br/>
    - Scope Controller<br/><br/>
    - Scope Global<br/><br/>
    
##==##

<!-- .slide: class="with-code inconsolata"-->
# Dans le scope du handler
```typescript
@UseInterceptors(TodoInterceptors)
@Get()
getTodos(): Array<Todo> { }
```
<!-- .element: class="big-code" -->
<br/><br/>

```typescript
@UseInterceptors(new TodoInterceptors())
@Get()
getTodos(): Array<Todo> { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Dans le scope du controller
```typescript
@UseInterceptors(TodoInterceptors)
@Controller('api/todos')
export class TodoController { }
```
<!-- .element: class="big-code" -->
<br/><br/>

```typescript
@UseInterceptors(new TodoInterceptors())
@Controller('api/todos')
export class TodoController { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Dans le scope global
Dans le fichier main.ts <br/><br/>

```typescript
const app = await NestFactory.create(AppModule);
app.useGlobalInterceptors(new TodoInterceptors());
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="with-code inconsolata" -->
# Dans le scope global
Dans un nest module : <br/><br/>

```typescript
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
```
<!-- .element: class="medium-code" -->
