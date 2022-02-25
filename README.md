# **SERVERLESS**

Basé sur le Serverless Typescript Starter pour AWS Lambda, ce projet vous permet de tester le service en local, avec le support de TypeScript, du linting, des variables d'environnement et des tests unitaires.

---

# Endpoints

## **/hello**
### Retourne un "Hello World!" simple
**GET** https://38r141u5fd.execute-api.us-east-1.amazonaws.com/dev/hello

## **/echo**
### Retourne le body de la requête
**POST** https://38r141u5fd.execute-api.us-east-1.amazonaws.com/dev/echo
``` json
{
  "key": "value"
}
```

## **/check**
### Retourne un status code correspondant a la disponibilite de l'URL dans le body

**POST** https://38r141u5fd.execute-api.us-east-1.amazonaws.com/dev/check
``` js
"https://google.com"  /* 200 */
"https://httpbin.org/status/404"  /* 404 */
"not-a-valid-url"  /* 404 */
"https://bit.ly/300awAn" /* 200 */
```

---

# Local

- Créer un conteneur a partir de l'image Docker distante
``` bash
$ docker run -dti atlasrw/serverless:danae
```

- Installer les dépendances *npm*
``` bash
$ npm install
```

- Simuler le service localement
``` bash
$ sls offline start
```

- Déployer le service sur votre cloud AWS
``` bash
$ sls deploy
```
