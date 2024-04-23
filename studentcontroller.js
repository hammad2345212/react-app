const Student = require('../models/studentmodel')
const mongoose=require('mongoose')

const createstudent=async(req,res)=>{
    const {name,reg}=req.body
    try{
        const newStudent=await Student.create({name,reg})
        res.status(200).json(newStudent)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

const getstudents=async(req,res)=>{
    try{
        const getStudent= await Student.find({}).sort({createdAt:-1})
        res.status(200).json(getStudent)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


const getstudent = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such Student"})
    }
    const getStudent=await Student.findById(id)

    if(!getStudent){
        return res.status(400).json({mssg: "No such student"})
    }

    res.status(200).json(getStudent)
}
module.exports={
    createstudent,
    getstudents,
    getstudent,
}