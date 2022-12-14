const { Router }=require('express');
const { request, response } = require('express');
const router=Router();


const groceriesLst=[
    {
        item:'milk',
        quantity:2,
    },
    {
        item:'cereal',
        quantity:29,
    },
    {
        item:'butter',
        quantity:200,
    },
]

router.get('/groceries',(request,response) => {
    response.send(groceriesLst);
});
router.get('/groceries/:item',(request,response)=>{
    const {item}=request.params;
    const groceryitem=groceriesLst.find((g)=> g.item===item);
    response.send(groceryitem)
})
//searching of item in given list
router.get('/groceries/:item/:item',(request,response)=>{
    const {item}=request.params;
    const groceryitem=groceriesLst.find((g) => g.item===item);
    response.send(groceryitem);

})
//Required url
router.get('/groceries/:item[a-z]',(request,response)=>{
   // console.log(request.params.item);
    response.send(200);
});
//wild card routes----if url not found in the given code
/*router.get("*",(request,response)=>{
    response.send("url not found");
});*/

//posting groceries list in the postman
router.post('/groceries',(request,response)=>{
   // console.log(request.body);
    groceriesLst.push(request.body);
    response.send(201);
});
module.exports=router;
