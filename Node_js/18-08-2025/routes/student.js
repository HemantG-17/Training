const express = require('express');
const studentController = require('../controller/studentcontroller');
const router = express.Router();

// Redirect to home if someone visits /add/studentList
router.post('/add/student', (req, res) => {
    studentController.addStudent(req, res);
});
router.get('/list/students',(req,res)=>{
    studentController.listStudents(req,res);
})
router.get('/delete/student/:_id',(req,res)=>{
    studentController.deleteStudent(req,res);
})
router.get('/edit/student/page/:_id',(req,res)=>{
    studentController.editStudentpage(req,res);
})
router.post('/update/student/:_id',(req,res)=>{
    studentController.saveEditedStudent(req,res);
})
module.exports = router;
