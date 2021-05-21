<!-- .slide: class="exercice" -->

# 08-exception-using
## Exercice

**Pour le moment notre serveur catch aucune erreur, pourtant si l'ID d'une todo n'existe pas il devrait** <br><br>

-   Modifiez le code du service afin de renvoyer une erreur si l'id d'une todo n'existe pas <br><br>
-   Modifiez le code du controller afin de renvoyer une exception <br><br>
-   Astuce: Pensez à utiliser le build-in Exception

##==##

<!-- .slide: class="exercice" -->
# 08-exception-using
## Solution
**Solution : 08-exception-using-solution**
<!-- .element: class="full-center" -->

##==##

<!-- .slide: class="exercice" -->
# 08-exception-create
## Exercice

**Le filtre NotFoundException est bien trop générique, ça serait bien d'informer l'utilisateur que la ressource demandée n'est pas disponible** <br><br>

- Dans le dossier shared/exceptions créez un 'custom exception filter' qui permet de renvoyer dans le message l'ID de la ressource demandée <br><br>
- Implémentez cette exception dans le service<br><br>
- Modifiez le controller pour assurer le typage de retour<br><br>

##==##

<!--.slide: class="exercice" -->
# 08-exception-create
## Solution

**Solution : 08-exception-create-solution**
<!-- .element: class="full-center" -->

