// microframework express
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://alefeio:al301159@cluster0-qoqjc.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

/* Tipos de parâmetros:

Query Params: req.query (filtros, ordenação, paginação...)
Route Params: req.params (identificar um recurso na alteração ou remoção)
Body: req.body (dados para criação ou alteração de um registro)
*/


// porta para acessar o servidor
app.listen(3333)