const Route = require('../models/route.model')

exports.readAll = (req, res) => {
    // Send all routes
    Route.find((err, routes) => {
        if (err) {
            res.status(400).send({ message: err.message })
            console.log(err)
        }

        res.send(routes)
    })
}

exports.read = (req, res) => {
    // Send one route
    Route.findById(req.params.routeId, (err, route) => {
        if (err) {
            res.status(400).send({ message: err.message })
            console.log(err)
        }

        if (!route) {
            return res.status(400).send({
                message: 'Route doesn\'t exist'
            })
        }

        res.send(route)
    })
}

exports.create = (req, res) => {
    // Create new route
    let route = new Route(req.body)
    route.save((err) => {
        if (err) {
            res.status(400).send({ message: err.message })
            console.log(err)
        }

        res.status(201).send();
    })
}

exports.update = (req, res) => {
    // Update one route
    Route.findByIdAndUpdate(req.params.routeId, req.body, (err, route) => {
        if (err) {
            res.status(400).send({ message: err.message })
            console.log(err)
        }

        if (!route) {
            return res.status(400).send({
                message: 'Route doesn\'t exist'
            })
        }

        res.send()
    })
}

exports.delete = (req, res) => {
    // Delete one route
    Route.findByIdAndDelete(req.params.routeId, (err, route) => {
        if (err) {
            res.status(400).send({ message: err.message })
            console.log(err)
        }

        if (!route) {
            return res.status(400).send({
                message: 'Route doesn\'t exist'
            })
        }

        res.status(204).send()
    })
}