const Route = require('../models/route.model')

const STATUS_OK = 'OK'
const STATUS_ERROR = 'ERROR'

exports.readAll = (req, res) => {
    // Send all routes
    Route.find((err, routes) => {
        if (err) {
            res.status(400).send({
                status: STATUS_ERROR,
                message: err.message
            })
            console.log(err)
        }

        res.send({
            status: STATUS_OK,
            message: `Routes: ${routes.length}`,
            routes
        })
    })
}

exports.read = (req, res) => {
    // Send one route
    Route.findById(req.params.routeId, (err, route) => {
        if (err) {
            res.status(400).send({
                status: STATUS_ERROR,
                message: err.message
            })
            console.log(err)
        }

        if (!route) {
            return res.status(400).send({
                status: STATUS_ERROR,
                message: 'Route doesn\'t exist'
            })
        }

        res.send({
            status: STATUS_OK,
            message: `Route: ${route.name}`,
            route
        })
    })
}

exports.create = (req, res) => {
    // Create new route
    let route = new Route(req.body)
    route.save((err) => {
        if (err) {
            res.status(400).send({
                status: STATUS_ERROR,
                message: err.message
            })
            console.log(err)
        }
        
        res.send({
            status: STATUS_OK,
            message: 'Route add successfully'
        })
    })
}

exports.update = (req, res) => {
    // Update one route
    Route.findByIdAndUpdate(req.params.routeId, req.body, (err, route) => {
        if (err) {
            res.status(400).send({
                status: STATUS_ERROR,
                message: err.message
            })
            console.log(err)
        }

        if (!route) {
            return res.status(400).send({
                status: STATUS_ERROR,
                message: 'Route doesn\'t exist'
            })
        }

        res.send({
            status: STATUS_OK,
            message: 'Route updated successfully',
            route
        })
    })
}

exports.delete = (req, res) => {
    // Delete one route
    Route.findByIdAndDelete(req.params.routeId, (err, route) => {
        if (err) {
            res.status(400).send({
                status: STATUS_ERROR,
                message: err.message
            })
            console.log(err)
        }

        if (!route) {
            return res.status(400).send({
                status: STATUS_ERROR,
                message: 'Route doesn\'t exist'
            })
        }

        res.send({
            status: STATUS_OK,
            message: 'Route deleted successfully',
            route
        })
    })
}