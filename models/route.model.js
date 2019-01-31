let mongoose = require('mongoose')
let Schema = mongoose.Schema

let checkpointSchema = new Schema({
    id: Number,
    latitude: Number,
    longitude: Number
}, { _id: false })

let routeSchema = new Schema({
    name: String,
    checkpoints: [checkpointSchema]
})

let Route = mongoose.model('Route', routeSchema)

module.exports = Route