const express = require("express") //eu vou fazer o pedido do express, ele vai voltar e ficar nessa variavel

const app = express()

app.get('/', (req, res) => res.send('Hello Word!'))

app.listen(3000)