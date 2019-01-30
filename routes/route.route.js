const express = require('express')
const router = express.Router()

const routeController = require('../controllers/route.controller')

router.get('/', routeController.readAll)
router.get('/:routeId', routeController.read)
router.post('/', routeController.create)
router.put('/:routeId', routeController.update)
router.delete('/:routeId', routeController.delete)

module.exports = router