<!-- .slide: class="exercice" -->

# 08-exception-using
## Exercice

**Pour le moment notre server catch aucune erreur, pourtant si l'id d'une todo n'existe pas il devrait** <br><br>

-   Modifier le code du service afin de renvoyer une erreur si l'id d'une todo n'existe pas <br><br>
-   Modifier le code du controller afin de renvoyer une exception <br><br>
-   Astuce: Penser à utiliser le build-n Exception

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

**Le filtre NotFoundException est bien trop générique, ça serai bien de d'informer l'utilisateur que la ressource demandé n'est pas disponible** <br><br>

- Dans le dossier shared/exceptions créer un 'custom exception filter' qui permet de renvoyer dans le message l'id de la ressource demandée <br><br>
- Implémenter cette exception dans le service<br><br>
- Modifier le controller pour assurer le typage de retour<br><br>

##==##

<!--.slide: class="exercice" -->
# 08-exception-create
## Solution

**Solution : 08-exception-create-solution**
<!-- .element: class="full-center" -->

