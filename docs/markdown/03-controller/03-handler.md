<!-- .slide: class="with-code insocnsolata" -->
# Comment définir un handler sur un endpoint donné
**Un handler est une simple fonction précédée d'une annotation**
<br><br>

```typescript
@Get('hello')
sayHello() {
  return 'Hello';
}
```
<!-- .element: class="big-code" -->

##==##

## Quelles sont les annotations disponibles ?
- __@GET__: le handler est accessible via la methode GET <br><br>
- __@Post__: le handler est accessible via la méthode POST <br><br>
- __@Put__: le handler est accessible via la méthode PUT <br><br>
- __@Patch__: le handler est accessible via la méthode PATCH <br><br>
- __@Delete__: le handler est accessible via la méthode DELETE<br><br>
- __@ALL__: le handler est accesssible via toutes les méthodes

Notes:
- Il est important de remarquer que les annotations @Get, @Post, @Put, @Patch, @Delete prennent en parèmètre
une string définissant un endpoint complémentaire à l'endpoint du controller

##==##

<!-- .slide: class="with-code inconsolata" --> 
# La magie du caractère __":"__

- Permet de rendre un endpoint d'handler dynamique <br><br>

```typescript
@Get('hello/:person')
sayHelloToPerson(@Param('person') name: string) {
  return `Hello ${name}`;
}
```
<!-- .element: class="big-code" -->

##==##

# Les annotations de récupération de paramètres

- __@Request() / @Req()__ permet de récupérer la requête dans son intégralité <br><br>
- __@Response() / @Res()__ permet de récupérer la réponse dans son intégralité <br><br>
- __@Session()__ permet de récupérer la session courante <br><br>
- __@Param(name_param?)__ permet de récupérer tous ou l'unique paramètre <br><br>
- __@Body(key?)__ permet de récupérer le body dans son intégralité ou partiellement <br><br>
- __@Query(key?)__ permet de tous ou un unique query paramètre<br><br>
- __@Ip()__ permet de récupérer l'adresse ip de l'host <br><br>
- __@HostParam()__ permet de récupérer l'ensemble des hosts

##==##

<!-- .slide: class="with-code inconsolata"-->
# Exemple d'utilisation
```typescript
interface body {
  name: string;
  password: string;
}
@Patch('user/:id')
updateUser(@Body() update: body) {
  return update; // { name: 'Nicolas', password: 'Nicolas' }
}

@Patch('user/:id')
updateUser(@Body('password') update: body) {
    return update; // Nicolas
}
```
<!-- .element: class="big-code" -->

##==##

# Les annotations de modifications de réponse

Les annotations permettant de modifier la réponse <br><br>

- __HttpCode()__  permet de modifier le status http de la réponse <br><br>
- __Redirect()__ permet de réaliser une redirection
