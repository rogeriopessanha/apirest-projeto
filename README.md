# API de Games
Esta API é utilizada para TAl e TAL...
## Endpoints
### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai recebar a listagem de todos os games.

Exemplo de resposta:
```

[
    {
        "id": 23,
        "title": "GTA",
        "year": 2023,
        "price": 70
    },
    {
        "id": 5,
        "title": "COD",
        "year": 2020,
        "price": 70
    },
    {
        "id": 15,
        "title": "Pokemon",
        "year": 2018,
        "price": 50
    },
    {
        "id": 102,
        "title": "Mario",
        "year": 1985,
        "price": 20
    }
]

```

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado.

Exemplo de resposta:
```
{
    "error": "Token invalido"
}
```

### POST /auth
Esse endpoint é responsável por retornar fazer o processo de login.
#### Parametros
email: E-mail do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.

Exemplo:
```
{
	"email": "rogerio@teste.com",
	"password": "12345"
}
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber o token JWT para conseguir acessar endpoints protegidos na API.

Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYUB0ZXN0ZS5jb20iLCJpYXQiOjE2NzkxMDQ1NjYsImV4cCI6MTY4MDE4NDU2Nn0.chgArm79R4IquHlRRh3A4KODBUQePd9OTNFpEq3wBnk"
}
```

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.

Exemplo de resposta:
```
{err: "Credenciais inválidas!"}
```
