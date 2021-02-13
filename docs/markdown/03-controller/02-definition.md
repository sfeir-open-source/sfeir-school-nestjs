# A quoi sert le controller

- Assure la responsabilité de catcher la request
- Assure la responsabilité d'envoyer la réponse
- Un controller par endpoint

![center h-600](assets/images/school/03-controller/controller.png)


##==##

<!-- .slide: class="with-code inconsolata"-->
# Qu'est ce qu'un controller ?

**Un controller est une simple classe précédée de l'annotation @Controller**
<br><br>

```typescript
@Controller()
export class StudentController {
  
}
```
<!-- .element: class="big-code" -->

Notes:
- le controller prend en paramètre une chaine de caractère qui définira le endpoint global pour ce controller
- le controller peut également prendre un objet { host: string, path: string) en paramètre  
- Il est également possible de définir un wilcard en utilisant les opérateur regex

##==##

<!-- .slide: class="with-code inconsolata" -->
# Où s'enregistre un controller

__Un controller s'enregistre toujours dans le tableau de controllers d'un module__ <br><br>

```typescript
@Module({
  controllers: [AppController]    
})
export class AppModule { }
