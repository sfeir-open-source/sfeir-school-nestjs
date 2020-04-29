<!-- .slide: class="transition " -->

# Pipes

##==##
# Pipes

Les pipes servent à :
* Transformer les données
* Valider les données et lever une exception si nécessaire

![w-1000 center](./assets/images/g5c62ad2ab9_0_449.png)

##==##
# Built-in pipes
2 pipes viennent par défaut avec NestJS
* ParseIntPipe
* ValidationPipe

##==##
<!-- .slide: class="with-code" -->

# ParseIntPipe
```typescript
@Get(':id')
async findOne(@Param('id', new ParseIntPipe()) id) {
  return await this.demosService.findOne(id);
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# ValidationPipe (class-validator)
Il faut tout d’abord installer class-validator qui est un puissant package de validation par annotations.

```shell
$ npm install --save class-validator class-transformer
```

https://github.com/typestack/class-validator#validation-decorators
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Au niveau global
```typescript
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Au niveau du DTO
```typescript
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Message d'erreur
Si problème de validation alors une erreur 400 Bad Request sera renvoyée.

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": [
    {
      "target": {},
      "property": "email",
      "children": [],
      "constraints": {
        "isEmail": "email must be an email"
      }
    }
  ]
}
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# En production
Suppression des détails dans les messages d’erreur.

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    disableErrorMessages: true,
  }),
);
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Stripping properties
Si certaines propriétés ne sont pas attendues dans le DTO, alors **whitelist** permettra de supprimer ces propriétés au moment de la validation. L’utilisation de **forbidNonWhitelisted** retournera en revanche un message d’erreur.

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
  }),
);
```
https://docs.nestjs.com/pipes#the-built-in-validationpipe

<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 06: Utilisation de ParseIntPipe
## Exercice

### TP/pipe
<br>
<br>

1. Utiliser le pipe **ParseIntPipe** sur la méthode **findById** de **UsersControllers**
<br>

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# SOLUTION

### TP/pipe-solution

<!-- .element: class="full-center" -->

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# Exercice 07: Utilisation de ValidationPipe
## Exercice

### TP/validation-pipe
<br>

<br>
1. Ajouter une validation lors de la création d’un User (Tous les champs obligatoire, Type Email …)
<br>

##==##
<!-- .slide: class="exercice sfeir-bg-pink" -->

# SOLUTION

### TP/validation-pipe-solution

<!-- .element: class="full-center" -->
