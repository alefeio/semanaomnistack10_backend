// microframework express
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const { setupWebSocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb+srv://alefeio:al301159@cluster0-qoqjc.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

// porta para acessar o servidor
server.listen(3333)

// Métodos HTTP: GET, POST, PUT, DELETE

/* Tipos de parâmetros:

Query Params: req.query (filtros, ordenação, paginação...)
Route Params: req.params (identificar um recurso na alteração ou remoção)
Body: req.body (dados para criação ou alteração de um registro)
*/

