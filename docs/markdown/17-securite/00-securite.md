<!-- .slide: class="transition " -->

# Sécurtié

##==##
<!-- .slide: class="with-code" -->

# Helmet
Helmet peut aider à protéger votre application contre certaines vulnérabilités Web bien connues en définissant les en-têtes HTTP de manière appropriée.

```shell
$ npm i --save helmet
```
```typescript
import * as helmet from 'helmet';
app.use(helmet());
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# CORS
Cross-origin resource sharing (CORS) est un mécanisme qui permet de demander des ressources à un autre domaine. 
Sous le capot, Nest utilise le package cors, qui fournit une multitude d’options que vous pouvez personnaliser en fonction de vos besoins.

```typescript
const app = await NestFactory.create(ApplicationModule); 
app.enableCors(); 
await app.listen(3000);
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# CSRF
Cross-site request forgery (known as CSRF or XSRF) est un type d’exploitation malveillante d’un site Web dans lequel des commandes non autorisées sont transmises à partir d’un utilisateur approuvé par l’application Web. Pour atténuer ce type d'attaques, vous pouvez utiliser le package csurf.

```shell
$ npm i --save csurf
```

```typescript
import * as csurf from 'csurf';
app.use(csurf());
```
<!-- .slide: class="big-code" -->

##==##
<!-- .slide: class="with-code" -->

# Rate Limiting
Pour se protéger des attaques de type brute-force il est possible de mettre en place une limitation du débit.

```shell
$ npm i --save express-rate-limit
```

```typescript
import * as rateLimit from 'express-rate-limit';

app.use(rateLimit({ 
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 100, // limit each IP to 100 requests per windowMs 
  })
);
```
<!-- .slide: class="big-code" -->
