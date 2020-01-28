const { Router } = require('express')

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// rota get devs para buscar todos os devs
routes.get('/devs', DevController.index)
// rota para cadastrar devs
routes.post('/devs', DevController.store)

// rota get para buscar devs
routes.get('/search', SearchController.index)

module.exports = routes