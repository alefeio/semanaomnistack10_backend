const axios = require('axios')
const Dev = require('../models/Dev')
const ParseStringAsArray = require('../utils/parseStringAsArray')

// funções do controller
// index, show. store, update e destroy

module.exports = {

    async index(req, res) {
        const devs = await Dev.find()

        return res.json(devs)
    },

    async store(req, res) {
        try {

            // usando a desestruturação para extrair as variáveis do req.body
            const { github_username, techs, latitude, longitude } = req.body

            let dev = await Dev.findOne({ github_username })

            if(!dev) {
                // utilizando axios para fazer uma busca na api e salvando na constante response
                const response = await axios.get(`https://api.github.com/users/${github_username}`)

                // criando variáveis
                const { name = login, avatar_url, bio } = response.data

                // split separa uma string e map pecorre o array gerado, criando um novo array tirando o espaço do início e do final com o trim()
                const techsArray = ParseStringAsArray(techs)

                const location = {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                }

                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location
                })
            }

            return res.json(dev)
        } catch (error) {
            console.log(error)
            return res.status(400).send({ erro: "Erro ao cadastrar."})
        }
    }
}