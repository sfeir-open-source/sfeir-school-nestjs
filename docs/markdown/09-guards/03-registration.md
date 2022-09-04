# Comment s’enregistre un guard
- Sur le scope du handler <br/><br/>
- Sur le scope du controller <br/><br/>
- Sur le scope globale <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Scope handler
```typescript
@Post()
@UseGuards(AuthorizationGuards)
createTodo() { }
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript
@Post()
@UseGuards(new AuthorizationGuards())
createTodo() { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Scope Controller

```typescript
@UseGuards(AuthorizationGuards)
@Controller('api/todos')
export class TodoController
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript

@UseGuards(new AuthorizationGuards())
@Controller('api/todos')
export class TodoController { }
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata"-->
# Scope Global
**Dans le fichier main.ts** <br/><br/>

```typescript
const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Scope Global
**Dans un nest module** <br/><br/>

```typescript
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
```
<!-- .element: class="medium-code" -->




