let mongoose = require('mongoose')
let Schema = mongoose.Schema

let routeSchema = new Schema({
    name: String,
    checkpoints: [{
        id: Number,
        latitude: Number,
        longitude: Number
    }]
})

let Route = mongoose.model('Route', routeSchema)

module.exports = Route