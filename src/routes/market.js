const { Router }=require('express');
const router=Router();
const supermarket=[{
    name:'Vinay Kumar Reddy',
    age:'19'

}]
router.get('/market',(req,res)=>{
  //  console.log(req.query);
    const { age }=req.query;
    const parsedAge=parseInt(age);
    if(!isNaN(parsedAge)){
        const filteredAge=supermarket.filter((s)=>s.age>=parsedAge);
        res.send(filteredAge);
    }
    else{
    res.send(supermarket);
    }
});
module.exports=router;