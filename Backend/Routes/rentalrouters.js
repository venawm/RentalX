const express = require('express')
const router = express.Router()
const carController = require('../Controllers/carController')
const userController = require('../Controllers/userController')
const rentController = require('../Controllers/rentController')
const verifyToken =require('../middleware/verifyToken')

// Users
router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.get('/users',userController.users)
router.post('/deleteuser',userController.deleteUser)

// Cars
router.post('/addcars',carController.addCar)
router.post('/rentcars',carController.rentCars)
router.get('/cars',carController.carsGetter)

//  Admin
router.get('/requests',rentController.rentalGetter)
router.get('/dashboard',rentController.dashboard)
router.post('/verify',verifyToken,(req,res)=>{
    try {
        
        res.json(true)
        
    } catch (error) {
        console.log(error)
    }
})
module.exports = router