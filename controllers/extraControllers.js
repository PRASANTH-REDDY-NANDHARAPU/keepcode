const Joiners=require('../models/joinModel')
exports.joinNow=(req,res,next)=>{
    res.render('./extraViews/joinNow.ejs',{currentPath:req.path})
}
exports.joinPostData=(req,res,next)=>{
    const {joinName,joinEmail,joinNumber,joinState,joinRefer}=req.body
    const joiner=new Joiners({
        joinerName:joinName,
        joinerEmail:joinEmail,
        joinerNumber:joinNumber,
        joinerState:joinState,
        joinerRefer:joinRefer,
    })
    joiner.save().then(()=>{
        console.log('joiner is added successfully...')
        res.redirect('/')
    }).catch(()=>{
        console.log("there is a joining problem....")
    })
 
    
    // console.log(userName)
}