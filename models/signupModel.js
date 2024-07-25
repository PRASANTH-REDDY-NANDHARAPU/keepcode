const mongoose=require('mongoose')

const Schema=mongoose.Schema

const usersSchema=new Schema({
    usersName:{type:String,required:true},
    usersEmail:{type:String,required:true},
    usersNumber:{type:String,required:true},
    usersPassword:{type:String,required:true},
    usersRole:{type:Number,required:true,default:0}
})

module.exports=mongoose.model('Users',usersSchema)