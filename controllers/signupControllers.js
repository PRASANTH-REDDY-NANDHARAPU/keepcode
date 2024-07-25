const Users=require('../models/signupModel')
const bcrypt=require('bcryptjs')
exports.postSignupData=(req,res,next)=>{
    const {userName,userEmail,userNumber,userPassword}=req.body
    
    Users.findOne({usersEmail:userEmail}).then((userExists)=>{
        if(userExists){
            return res.redirect('./signup')
        }
        return bcrypt.hash(userPassword,12).then((password)=>{
    
            const users=new Users({
                usersName:userName,
                usersEmail:userEmail,
                usersNumber:userNumber,
                usersPassword:password,
            })
            return users.save()
    })
    .then(result=>{
        console.log("user created.....")
        res.redirect('/signin')
    })
    }).catch(err=>{
        console.log(err,"signup is closed...")
    }) 
}