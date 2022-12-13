const { Router, response }=require('express');
const user=require('../Database/Schemas/user');
const { hashPassword,comparePassword } = require('../utils/helpers');
const router=Router();
router.post('/login', async (req,res)=>{
    const { email,password}=req.body;
    if(!email || !password) return res.send(400);
    const userdb=await user.findOne({email});
    if(!userdb) return res.status(401).json({
        msg:"user doesn't have account"
    });
    const isValid=comparePassword(password,userdb.password)
    if(isValid) return res.status(200).json({
        msg:"Login succeed"
    });
    else{
        return res.status(401).json({
            msg:"Invalid Password"
        });
    }
});
router.post('/register', async(req,res)=>{
    const {username,password,email}=req.body;
    const userdb=await user.findOne({$or:[{username},{email}]})
    if(userdb){
        res.status(401).json({
            msg:'user already exists',
        })
    }
    else{
        const password=hashPassword(req.body.password);
        const newuser=await user.create({username,password,email});
        //newuser.save();
        res.status(401).json({
            msg:'created ok',
        })
    }
});
/*router.post('/register', async(req,res)=>{
    const {username,password,email}=req.body;
    const userdb=await user.findOne({$and:[{username,email}]})
    if(userdb){
        res.status(401).json({
            msg:'user already exists',
        })
    }
    else{
        const newuser=await user.create({username,password,email});
        //newuser.save();
        res.status(401).json({
            msg:'created ok',
        })
    }
})*/
module.exports=router;