const express=require('express')
const {
    createstudent,
    getstudents,
    getstudent
}=require('../controller/studentcontroller')
const router = express.Router()

router.get('/',getstudents)

router.get('/:id', getstudent)

router.post('/', createstudent)

router.delete('/:id',(req,res)=>{
    res.json({mssg:"Delete a student"})
})

router.patch('/:id',(req,res)=>{
    res.json({mssg:"Update a student"})
})




module.exports=router