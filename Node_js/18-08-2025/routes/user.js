const express=require('express');
const userController=require('../controller/userController')
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('home');
})
router.get('/user/signup',(req,res)=>{
    res.render('signup');
})
router.post('/add/user',(req,res)=>{
    userController.addUser(req,res)
})
module.exports=router;