# Comment réaliser sa configuration
- Par fichier .env<br/><br/>
- En réalisation une fonction de load custom<br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Par fichier .env
```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.local.env'  
  })],
})
export class AppModule {}
```
<!-- .element: class="medium-code"-->


```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.development.env', '.production.env']  
  })],
})
export class AppModule {}
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Par une fonction de configuration
```typescript
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.DATABASE_HOST,
  }
});
```
<!-- .element: class="medium-code"-->


```typescript
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
```
<!-- .element: class="medium-code"-->

Notes:
Il est possible de charger plusieurs fichier de configurations permettant de découpler la configuration de votre application.

Pour réaliser ce genre de procédé il faudra utiliser la fonction registerAs('database', () => ({}))

##==##

<!-- .slide: class="with-code inconsolata" -->
# Le build ne compile que les fichiers typescripts
**Par défaut, Nest ne compile que vos fichiers en typescript, il faut donc copier vos fichiers quand vous effectuez votre build** <br/><br/>

Il faut ajouter de la config au niveau du compilerOptions de votre projet -> fichier **nest-cli.json** <br/><br/>

```json
{
    "compilerOptions": {
        "assets": [{
            "include": "../environnements/*.env",
            "outDir": "dist/app/environments"
        }]
    }
}
```
<!-- .element: class="medium-code" -->

