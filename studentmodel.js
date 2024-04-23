const mongoose=require('mongoose')

const Schema=mongoose.Schema
const stdschema=new Schema({
    name:{
        type: String,
        required: true
    },
    reg:{
        type: String,
        requied: true
    }
}, {timestamps:true})

module.exports= mongoose.model('student',stdschema)