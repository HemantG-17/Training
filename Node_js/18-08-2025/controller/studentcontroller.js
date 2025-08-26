const Student = require('../models/Student')
async function addStudent(req, res) {
    try {
        console.log(req.body, 'req.body');
        let student = new Student(req.body);
        await student.save();
        let students = await Student.find({})
        res.render('studentList', {
            students: students
        });
        console.log("Student data saved successfully...")
    } catch (err) {
        console.log(err)
    }
}

async function listStudents(req, res) {
    try {
        let students = await Student.find({})
        res.render('studentList', {
            students: students
        });

    } catch (err) {
        console.log(err)
    }
}

async function deleteStudent(req, res) {
    try {
        let studentid = req.params._id;
        console.log(studentid, "deleted student")
        await Student.deleteOne({ _id: studentid })
        let students = await Student.find({})
        res.render('welcomeAdmin', {
            students: students
        })
    } catch (err) {
        console.log(err)
    }
}

async function editStudentpage(req,res){
    try{
        let studentid=req.params._id;
        let student=await Student.findOne({_id:studentid})
        res.render('editStudent',{
            student:student
        })
    }catch(err){
         console.log(err)
    }
}
async function saveEditedStudent(req,res){
    try{
          let studentid = req.params._id;
          let student= new studentid(req.body)
          await student.save()
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent,
    listStudents,
    deleteStudent,
    editStudentpage,
    saveEditedStudent,
}