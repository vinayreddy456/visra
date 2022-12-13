const { request, response } = require('express');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const express=require('express');
const session=require('express-session');
const bodyParser = require('body-parser')
const groceriesRouter=require('./routes/groceries.js')
const supermarketRouter=require('./routes/market');
const authRoute=require('./routes/auth');
const cookie=require('./cookies');
const sessionpar=require('./session');
require('./Database/connect.js');
require('./Database/Schemas/user');
const app=express();
const Port=3002;
app.listen(Port,()=> console.log('Running  express srever on the port $(Port}!'));

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret:'some secret',
    
    resave:false,
    saveUninitialized:false,
    //store
}));
//app.use(sessionpar);
app.use(authRoute);
app.use(cookie);
app.use(groceriesRouter);
app.use(supermarketRouter);
