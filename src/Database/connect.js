const mongoose=require('mongoose');
mongoose.set('strictQuery', false)
//mongoose.connect('mongodb://localhost:27017/vinay')
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.nucrbbe.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('Connected to db '))
.catch((errr)=>console.log(errr));
