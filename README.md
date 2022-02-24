# **DANAË**

Base sur le Serverless Typescript Starter, ce projet vous permet de tester en local, le sopport TypeScript, le linting, et le support des variables d'environnement comme des tests unitaires.

---

# Endpoints

## Hello
### Envoie un "Hello World!" simple
**GET** https://38r141u5fd.execute-api.us-east-1.amazonaws.com/dev/hello

## Echo
### Retourne le body JSON de la requête
**POST** https://38r141u5fd.execute-api.us-east-1.amazonaws.com/dev/echo
``` json
{
  "key": "value"
}
```

## Check
### Retourne un status code correspondant a la disponibilite de l'URL dans le body

**POST** https://38r141u5fd.execute-api.us-east-1.amazonaws.com/dev/check
``` json
"https://google.com" // 200
"https://httpbin.org/status/404" // 404
"not-a-valid-url" // 404
"https://bit.ly/300awAn" // 200
```

---

# Local

- Creer un conteneur a partir de l'image Docker distante
``` bash
$ docker run -dti atlasrw/danae
```

- Installer les dependances *npm*
``` bash
$ npm install
```

- Simuler le service localement
``` bash
$ sls offline start
```

- Deployer le service sur votre cloud AWS
``` bash
$ sls deploy
```

- Et ne pas oublier de tester !
``` bash
$ npm test
```