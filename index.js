
//variaveis de ambiente
require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const JWTSecret = process.env.JWT_PASSWORD

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function auth(req, res, next) {

    const authToken = req.headers['authorization']

    if (authToken != undefined) {

        const bearer = authToken.split(' ')
        var token = bearer[1]

        jwt.verify(token, JWTSecret, (error, data) => {
            if (error) {
                res.status(401)
                res.json({ error: 'Token invalido' })
            } else {

                req.token = token
                req.loggedUser = { id: data.id, email: data.email }
                next()
            }
        })
    } else {
        res.status(401)
        res.json({ error: 'token invalido' })
    }
}


var DB = {
    games: [
        {
            id: 23,
            title: 'GTA',
            year: 2023,
            price: 70
        },
        {
            id: 5,
            title: 'COD',
            year: 2020,
            price: 70
        },
        {
            id: 15,
            title: 'Pokemon',
            year: 2018,
            price: 50
        },
        {
            id: 102,
            title: 'Mario',
            year: 1985,
            price: 20
        },
    ],

    users: [
        {
            id: 1,
            name: 'Rogerio',
            email: 'rogerio@teste.com',
            password: '12345',
        },
        {
            id: 2,
            name: 'Maria',
            email: 'maria@teste.com',
            password: '654321',
        },
        {
            id: 3,
            name: 'João',
            email: 'joao@teste.com',
            password: '69870',
        },
    ]
}

app.get('/games', auth, (req, res) => {


    res.statusCode = 200
    res.json(DB.games);
})

app.get('/game/:id', auth, (req, res) => {
    
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {

        var id = parseInt(req.params.id)

        var HATEOAS = [
            {
                href: 'http://localhost:3000/game/'+id,
                method: 'DELETE',
                rel: 'deleta_game'
            },
            {
                href: 'http://localhost:3000/game/'+id,
                method: 'PUT',
                rel: 'edit_game'
            },
            {
                href: 'http://localhost:3000/game/'+id,
                method: 'GET',
                rel: 'get_game'
            },
            {
                href: 'http://localhost:3000/game',
                method: 'GET',
                rel: 'get_all_games'
            }
        ]

        var game = DB.games.find(g => g.id == id)

        if (game != undefined) {
            res.statusCode = 200
            res.json({game, _links: HATEOAS})
            // res.json(game)
        } else {
            res.sendStatus(404)
        }
    }
})


app.post('/game', auth, (req, res) => {
    var { title, year, price } = req.body

    DB.games.push({
        id: 2323,
        title,
        year,
        price
    })

    res.sendStatus(200)
})

app.delete('/game/:id', auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)

        var index = DB.games.findIndex(g => g.id == id)

        if (index == -1) {
            res.sendStatus(404)
        } else {
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})

app.put('/game/:id', (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)

        var game = DB.games.find(g => g.id == id)

        if (game != undefined) {
            var { title, year, price } = req.body

            if (title != undefined) {
                game.title = title
            }

            if (price != undefined) {
                game.price = price
            }

            if (year != undefined) {
                game.year = year
            }

            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }
    }
})


app.post("/auth",(req, res) => {

    var {email, password} = req.body;

    if(email != undefined){

        var user = DB.users.find(u => u.email == email);
        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email},JWTSecret,{expiresIn:'48h'},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err:"Falha interna"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                })
            }else{
                res.status(401);
                res.json({err: "Credenciais inválidas!"});
            }
        }else{
            res.status(404);
            res.json({err: "O E-mail enviado não existe na base de dados!"});
        }

    }else{
        res.status(400);
        res.send({err: "O E-mail enviado é inválido"});
    }
});



app.listen(process.env.PORT, () => {
    console.log(`API rodando ${process.env.PORT}`)
})