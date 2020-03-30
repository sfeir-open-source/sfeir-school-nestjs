<!-- .slide: class="transition-orange sfeir-bg-white-4" -->

# Sécurtié

##==##
# Helmet
Helmet peut aider à protéger votre application contre certaines vulnérabilités Web bien connues en définissant les en-têtes HTTP de manière appropriée.

```
$ npm i --save helmet
```
```
import * as helmet from 'helmet';
app.use(helmet());
```

##==##
# CORS
Cross-origin resource sharing (CORS) est un mécanisme qui permet de demander des ressources à un autre domaine. 
Sous le capot, Nest utilise le package cors, qui fournit une multitude d’options que vous pouvez personnaliser en fonction de vos besoins.

```
const app = await NestFactory.create(ApplicationModule); 
app.enableCors(); 
await app.listen(3000);
```

##==##
# CSRF
Cross-site request forgery (known as CSRF or XSRF) est un type d’exploitation malveillante d’un site Web dans lequel des commandes non autorisées sont transmises à partir d’un utilisateur approuvé par l’application Web. Pour atténuer ce type d'attaques, vous pouvez utiliser le package csurf.

```
$ npm i --save csurf
```

```
import * as csurf from 'csurf';
app.use(csurf());
```

##==##
# Rate Limiting
Pour se protéger des attaques de type brute-force il est possible de mettre en place une limitation du débit.

```
$ npm i --save express-rate-limit
```

```
import * as rateLimit from 'express-rate-limit';

app.use(rateLimit({ 
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 100, // limit each IP to 100 requests per windowMs 
  })
);

```
