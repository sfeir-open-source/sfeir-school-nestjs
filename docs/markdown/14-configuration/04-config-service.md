<!-- .slide: class="with-code inconsolata" -->
# Comment récupérer sa configuration 

**Le module ConfigModule exporte un service ConfigService permettant de récupérer notre config** <br><br>

```typescript
import { ConfigService } from '@nestjs/config';

@Controller()
export class UserService {
    constructor(private readonly configService: ConfigService) {}
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment récupérer une propriété de sa configuration

**ConfigService expose une methode get<T>('key') permettant de récupérer une propriété de sa configuration** <br><br><br>

```typescript
this.configService.get<number>('PORT');
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolota" -->
# Et si je veux récupérer ma config au lancement du serveur ?
<br><br><br>

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT'));
}
```
<!-- .element: class="big-code" -->
