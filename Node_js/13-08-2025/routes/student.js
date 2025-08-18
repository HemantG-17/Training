const express=require('express')
const Student=require('../models/Student')
const router=express.Router();

//http:localhost:3000/student/add
router.post('/student/add',async(req,res)=>{
    console.log(req.body);
    let student= new Student(req.body);
    await student.save();
    res.end("<h1> data as been saved")
})
module.exports=router;