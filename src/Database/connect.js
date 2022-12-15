const mongoose=require('mongoose');
mongoose.set('strictQuery', false)
//mongoose.connect('mongodb://localhost:27017/vinay')
//mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.nucrbbe.mongodb.net/?retryWrites=true&w=majority')
const mo=process.env.mo || 'mongodb+srv://vinayreddy:123vinay4567890@cluster0.bnbrcg6.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mo)
.then(()=>console.log('Connected to db '))
.catch((errr)=>console.log(errr));
