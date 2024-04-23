require('dotenv').config()
const express = require('express')
const mongoose=require('mongoose')
const cors = require('cors');
const router=require('./routes/students')
const app = express();
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("database connected and Listening at port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

app.use(express.json())
app.use((req,res,Next)=>{
    console.log(req.path,req.method)
    Next()
}) 

// app.get('/',(req,res)=>{
//     res.json({name:'Hammad'})
// })

app.use('/api/student',router)
