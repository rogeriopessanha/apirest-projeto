const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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
    ]
}

app.get('/games', (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.get('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)

        var game = DB.games.find(g => g.id == id)

        if (game != undefined) {
            res.statusCode = 200
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})


app.post('/game', (req, res) => {
    var {title, year, price} = req.body

    DB.games.push({
        id: 2323,
        title,
        year,
        price
    })

    res.sendStatus(200)
})

app.delete('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)

        var index = DB.games.findIndex(g => g.id == id)
        
        if (index == -1) {
            res.sendStatus(404)
        }else{
            DB.games.splice(index,1)
            res.sendStatus(200)
        }
    }
})



app.listen(3000, () => {
    console.log('API rodando')
})