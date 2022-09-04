# Mise en context
- Les applications tournent sur différents environnements <br/><br/>
- En Node js on utilise les fichiers **.env** <br/><br/>
- Nest Js procure un package faisant le gros du travail pour vous !!!

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment l'utiliser ?
```bash
npm install --save @nestjs/config
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```
<!-- .element: class="medium-code" -->

##==##

# Qu'est ce que ce package nous procure ?
- Utilise dotenv 'sous le capot' <br/><br/>
- Charge vos fichiers d'environnement <br/><br/>
- Expose un service ConfigService <br/><br/>
- Permet une config lazyloadé

