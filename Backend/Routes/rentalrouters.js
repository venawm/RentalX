const express = require('express')
const router = express.Router()
const carController = require('../Controllers/carController')
const userController = require('../Controllers/userController')

router.get('/cars',carController.carsGetter)
router.post('/signup',userController.signup)


module.exports = router