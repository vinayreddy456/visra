const {Router}=require('express');

const cookieParser=require('cookie-parser');


const app=Router();
app.use(cookieParser());
app.get('/cookie',(req,res)=>{
    res.send('app is running');
    console.log("app is running");
}),
app.get('/set-cookie',(req,res)=>{

   // res.setHeader('set-cookieskkk',"vinay=reddy");---simple method to create cookies in localhost
   res.cookie('vinay','reddy',{
    //maxAge:1000,
   // expires: new Date('06 December 2022'),
   //httpOnly:true,---It is applicable on cilent side
   //secure:true;
   
    
});
   //adding multiple cookies in the localhost
  // res.cookie('surya','bhai');
    res.send('cookie is a set vinay=reddy456');

}),
//retriving the cookies from the localhost
app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);

}),
//deleting the cookies in the localhost
app.get('/delete-cookie',(req,res)=>{
    res.clearCookie('surya');
    res.send('cookie is a deleted');

})
//cookie validation
function validateCookie(req,res,next){
    const { cookies }=req;
    if('session_id' in cookies){
        console.log('session_id exists');
        if(cookies.session_id ==='123456'){
            next();
        }
        else{
            res.status(403).json({
                msg:'Not Authorized'
            });
        }
    }
    else{
        res.status(403).json({
            msg:'Not Authorized'
        });
    }
}
app.get('/signin',(req,res)=>{
    res.cookie('session_id','123456');
    res.status(200).json({ msg:'Logged In.'})
});
app.get('/protected',validateCookie,(req,res)=>{
    res.status(200).json({
        msg:'Given credentials is Authorized'
    });
})
module.exports=app;

