const express=require('express')
const extraController=require('../controllers/extraControllers')
const extraRoutes=express.Router()
extraRoutes.get('/join-now',extraController.joinNow)
extraRoutes.post('/join-now',extraController.joinPostData)

module.exports=extraRoutes
