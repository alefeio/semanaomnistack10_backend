const Dev = require('../models/Dev')
const ParseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(req, res) {
        // buscar devs num raio de 10 km
        // filtrar por tecnologia

        const { latitude, longitude, techs } = req.query

        const techsArray = ParseStringAsArray(techs)

        console.log(techsArray)

        const devs = await Dev.find({
            techs: { $in: techsArray },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return res.json({ devs })
    }
}