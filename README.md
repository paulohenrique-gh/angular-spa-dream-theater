# SPA Música

Projeto relacionado a atividade do bootcamp T-Academy para fins didáticos.\
Foi proposta a criação de uma página relacionada a música, e escolhi a banda Dream Theater para esse projeto.

![image](https://github.com/user-attachments/assets/cd21d6fb-e43e-4fec-813e-94c6b77ab298)
Home
---
<br>

![image](https://github.com/user-attachments/assets/e1161c60-71fd-4859-9157-de1daf995487)
Discografia
-
<br>

![image](https://github.com/user-attachments/assets/7c9de780-e8f4-4875-ba28-becdc670eb89)
Detalhes de um álbum
-
<br>


![image](https://github.com/user-attachments/assets/f08585e1-da00-47e4-b8ae-f771b253820d)
Integrantes da banda
-
<br>


![image](https://github.com/user-attachments/assets/4d99efda-032c-43c3-945a-26d3b5ea028c)
Detalhes de um integrante
-

## Tecnologias
- Angular
- TypeScript
- Tailwind

## Executando a aplicação

```shell
git clone git@github.com:paulohenrique-gh/angular-spa-dream-theater.git
```

```shell
cd angular-spa-dream-theater
```

```shell
npm install
```

Após isso é necessário iniciar o servidor do Angular e o do json-server

```shell
ng serve
```

```shell
npx json-server db.json
```


## Hierarquia básica dos componentes

```mermaid
graph TD
    A[app] --> B[navbar]
    A[app] --> C[router]
    A[app] --> D[footer]
    C[router] --> E[home]
    C[router] --> F[discography]
    C[router] --> G[band]
    F[discography] --> H[album-details]
    H[album-details] --> I[tracklist]
    G[band] --> J[band-member-details]
    E[home] --> K[subscription-form] 
```
