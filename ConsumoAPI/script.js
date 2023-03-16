

// function login() {
//     var emailField = document.getElementById('email')
//     var passwordField = document.getElementById('password')

//     var email = emailField.value
//     var password = passwordField.value

//     axios.post('http://localhost:3000/auth', {
//         email,
//         password
//     })
//     .then(res => {
//         alert('LOGADO')
//     })
//     .catch(error => {
//         alert('ERRO AO FAZER O LOGIN')
//     })
// }

// var axiosConfig = {
//     headers: {
//         Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJtYXJpYUB0ZXN0ZS5jb20iLCJpYXQiOjE2Nzg4MzE5NzgsImV4cCI6MTY3OTAwNDc3OH0.RIn36Mpoz6JXLj4O0kW55fIfLoN8VkI5d1BltOlbGxM'
//     }
// }

// function createGame() {
//     var titleInput = document.getElementById('title')
//     var yearInput = document.getElementById('year')
//     var priceInput = document.getElementById('price')

//     var game = {
//         title: titleInput.value,
//         year: yearInput.value,
//         price: priceInput.value
//     }

//     axios.post('http://localhost:3000/game', game)
//     .then(response => {
//         if (response.status == 200) {
//             alert('Jogo cadastrado com sucesso')
//             location.reload()
//         }
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }

// function deleteGame(listItem) {
//     var id = listItem.getAttribute('data-id')
//     axios.delete('http://localhost:3000/game/'+id).then(response => {
//         alert('Jogo deletado')
//     })
//     .catch( error => {
//         console.log(error)
//     })
// }

// function loadForm(listItem) {
//     var id = listItem.getAttribute('data-id')
//     var title = listItem.getAttribute('data-title')
//     var year = listItem.getAttribute('data-year')
//     var price = listItem.getAttribute('data-price')

//     document.getElementById('idEdit').value = id
//     document.getElementById('titleEdit').value = title
//     document.getElementById('yearEdit').value = year
//     document.getElementById('priceEdit').value = price
// }

// function updateGame() {
//     var idInput = document.getElementById('idEdit')
//     var titleInput = document.getElementById('titleEdit')
//     var yearInput = document.getElementById('yearEdit')
//     var priceInput = document.getElementById('priceEdit')

//     var game = {
//         title: titleInput.value,
//         year: yearInput.value,
//         price: priceInput.value
//     }

//     var id = idInput.value

//     axios.put('http://localhost:3000/game/'+id, game)
//     .then(response => {
//         if (response.status == 200) {
//             alert('Jogo atualizado com sucesso')
//             location.reload()
//         }
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }


// axios.get('http://localhost:3000/games', axiosConfig)
// .then(response => {
//     var games = response.data
//     var list = document.getElementById('games')

//     games.forEach(game => {

//         var item = document.createElement('li')

//         item.setAttribute('data-id', game.id)
//         item.setAttribute('data-title', game.title)
//         item.setAttribute('data-year', game.year)
//         item.setAttribute('data-price', game.price)

//         item.innerHTML= game.id + ' - ' + game.title + ' - R$ ' + game.price

//         var deleteBtn = document.createElement('button')
//         deleteBtn.innerHTML = 'Deletar'
//         deleteBtn.addEventListener('click', function() {
//             deleteGame(item)
//         })

        
//         var editBtn = document.createElement('button')
//         editBtn.innerHTML = 'Editar'
//         editBtn.addEventListener('click', function() {
//             loadForm(item)
//         })



//         list.appendChild(deleteBtn)
//         list.appendChild(editBtn)
//         list.appendChild(item)
//     });
// })
// .catch(error => {
//     console.log(error)
// })