const express = require('express')
const router = express.Router()
const carController = require('../Controllers/carController')
const userController = require('../Controllers/userController')
const verifyToken =require('../middleware/verifyToken')

router.get('/cars',carController.carsGetter)
router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.get('/users',userController.users)
router.post('/addcars',carController.addCar)
router.post('/rentcars',carController.rentCars)
router.post('/verify',verifyToken,(req,res)=>{
    try {
        
        res.json(true)
        
    } catch (error) {
        console.log(error)
    }
})
module.exports = router