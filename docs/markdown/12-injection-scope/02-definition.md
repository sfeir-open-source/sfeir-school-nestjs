# Qu'est que l'injection scope ?
- Dans Nest Js tout est par défaut partagé <br/><br/>
- Parfois on souhaite que l'instance ait une duré de vie propre à la requête/réponse <br/><br/>
    - mise en cache graphQL
    - log propre un certain context
    - ...

Notes:
Pour rappel, dans Node js chaque request/response est traité dans un thread séparé ce qui rend l'utilisation d'une instance de classe partagé
comme les services totalement sûre.

##==##

# Provider et controller
**On peut modifier le scope d'une controller mais aussi celui d'un Provider**
<!-- .element: class="full-center" -->

##==##

# Les différents type de scope
|Mode Default                                              |Mode Request            |Mode Transient                |
|----------------------------------------------------------|------------------------|------------------------------|
Mode par défaut <br/> Crée une unique instance <br/> Partagée|Une instance par requête| Une instance par consommateur|

