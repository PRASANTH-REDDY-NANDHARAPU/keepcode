const express=require('express')
const Routes=express.Router()
const signupController=require('../controllers/signupControllers')
Routes.post('/signup',signupController.postSignupData)
module.exports=Routes