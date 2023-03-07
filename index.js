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

app.get('/', () => {
    
})



app.listen(3000, () => {
    console.log('API rodando')
})