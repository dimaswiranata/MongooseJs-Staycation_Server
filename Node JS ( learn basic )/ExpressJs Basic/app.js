const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

// app.get('/', (req, res) => {
//   res.send('Welcome to Express JS')
// })

app.get('/', (req, res) => {
  const pemain = [
    { name : 'ronaldo'},
    { name : 'modric'},
    { name : 'benzema'},
  ]
  res.render('index', {
    name: 'Dimas Agusta Wiranata',
    peminatan: 'Software Engineering',
    pemain: pemain
  })
})

app.get('/:name', (req, res) => {
  res.send(`Nama saya : ${req.params.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})