# A quoi bon tester ??

- Tester se n'est pas douter mais **livrer une application de qualité** <br><br>
- **100%** de code coverage ne veut **pas** dire que votre application est correctement testé <br><br>
- Eviter les régressions<br><br>
- Différents types de tests:
    - Unitaire
    - End to End
    - Mutants


##==##

<!-- .slide: class="with-code inconolata" -->
# Les tests unitaires
<br><br>

- permet de tester unitairement son code <br><br>
- chaque morceau de code est isolé <br><br>
- un expect par test 

##==##

<!-- .slide: class="with-code inconsolata" -->
# Les tests end to end
<br><br>

- permet de tester la fonction dans sa globalité <br><br>
- un expect par test<br><br>
- nécessite de mocker la requête http


##==##

<!-- .slide: class="with-code inconsolata" -->
# Les tests mutants
<br><br>

- permet de tester unitairement son code <br><br>
- 'mute' votre code <br><br>
- code solide si aucun mutant
