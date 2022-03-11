# Url Shortener

##### By: [@OberdanSoldi](https://github.com/OberdanSoldi)

### Tecnologias usadas:
<div>
    <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
    <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
    <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
    <img height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

</div>

---

## Iniciar projeto:

### Instalar dependências
```
npm install
```

### Rodar projeto
```
npm run dev
```

---

## Endpoints

### Post url:

```http request
POST http://localhost:4000/postUrl
```

### Redirect to url

```http request
GET http://localhost:4000/(short-name)
```