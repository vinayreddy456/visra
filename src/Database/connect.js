const mongoose=require('mongoose');
mongoose.set('strictQuery', false)
//mongoose.connect('mongodb://localhost:27017/vinay')
mongoose.connect('mongodb+srv://vinayreddy:<123vinay4567890>@cluster0.bnbrcg6.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('Connected to db'))
.catch((errr)=>console.log(err));
