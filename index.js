const express=require("express")
const app=express()
const bodyParser=require('body-parser')
// const debuglog=require('debug')("development:index.js")
const mongoose=require('mongoose')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
// ------------started routing set up----------
const navRoutes=require('./routes/navRoutes')
const extraRoutes=require('./routes/extraRoutes')
const signupRoutes=require('./routes/signupRoutes')
app.use(navRoutes)
app.use(extraRoutes)
app.use(signupRoutes)
// ---------------------connecting to data base--------
mongoose.connect("mongodb+srv://keepcode:ishowspeed@keepcode.qvgmswp.mongodb.net/").then(()=>{
    console.log('db connected...')
    // debuglog('db is connected...')
}).catch(()=>{
    console.log("something went wrong with db...")
})
app.listen(3000,()=>{
    console.log("your'e app is running on port 3000")
})

