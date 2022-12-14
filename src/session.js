/*const {Router}=require('express');
const session=require('express-session');
//const store=new session.MemoryStore();
const router=Router();

router.use(session({
    secret:'some secret',
    cookie:{
        maxAge:10000
    },
    resave:false,
    saveUninitialized:false,
    store
}));
router.use((req,res,next)=>{
    console.log(store);
    console.log(' ${req.method}-${req.url} ');
    next();
})

router.post('/login',(req,res)=>{
   // console.log(req.sessionID)
    const { username , password}=req.body;
    if(username && password){
        
        if(req.session.authenticated){
            res.json(req.session);
        }
        else{
            if(password===123){
                req.session.authenticated=true;
                req.session.user={
                    username,password
                }
                res.json(req.session);
            }
            else{
                res.status(403).json({
                    msg:'Bad Credentials'
                })
        }

    }
}
    else{
        res.status(403).json({
            msg:'Bad Credentials'
        })
    }

    
});
module.exports=router;*/