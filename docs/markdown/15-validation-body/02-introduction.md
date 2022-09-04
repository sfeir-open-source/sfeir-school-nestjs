# Validation sur les données envoyées au serveur
- Avoir un schéma de validation <br/><br/>
- S'assurer que les données envoyées sont corrects <br/><br/>
- Permet d'éviter certaines failles de sécurité <br/><br/>

##==##

# Comment valider ces données ??
**Nest Js procure tout ce dont vous avez besoin pour faire de la validation plus ou moins complexe en fonction de vos besoin** <br/><br/>

- pipe de validation <br/><br/>
- class-validator <br/><br/>
- class-transformer

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment intégrer facilement le pipe de validation
**De manière globale** <br/><br/>

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment intégrer facilement le pipe de validation
**Sur vos endpoints en particulier** <br/><br/>

```typescript
@Post()
@UsePipes(new ValidationPipe({ transform: true }))
async create(@Body() todoCreation: CreateTodoDto) {
  this.todoService.create(todoCreation);
}
```
<!-- .element: class="big-code" -->
