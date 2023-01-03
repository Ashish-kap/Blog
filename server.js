const app = require('./app.js')
const mongoose = require('mongoose')
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

mongoose.connect('mongodb+srv://srigbok:test1234@cluster0.oj5qw.mongodb.net/myblog',{
 
}).then((con)=>{
    console.log('database connection successful')
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server started')
})

