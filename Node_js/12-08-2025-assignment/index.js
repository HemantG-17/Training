const students = require("./students.json");
const express = require('express');
const app = express();
const fs = require('fs');
const { findSourceMap } = require('module');
app.use(express.json()); // Middleware to parse JSON bodies
//localhost:3000
app.get('/', (req, res) => {
    console.log('this is get method');
    res.end('Hello World from server');
});
//http://localhost/students => return all 5 students
app.get('/students', (req, res) => {
    console.log('this is get method for users');
    res.json(students);
});

//http://localhost:3000/student/2 => fetch the student having rollNo 2 
app.get('/student/:rollNo', (req, res) => {
    let rollNo = parseInt(req.params.rollNo);
    let student = students.find((student) => student.rollNo === rollNo);
    if (student) {
        console.log(student)
    } else {
        res.status(404).send('<h1> Student not found...');
    }

})

//http://localhost:3000/student/add/ => add a student
app.post('/student/add', (req, res) => {
    console.log(req.body);

    students.push(req.body);//now this users variable cantain 11 users
    fs.writeFile('./students.json', JSON.stringify(students), (err) => {
        res.end(' ');
    });

    res.end('Student added successfully');

});

//http://localhost:3000/student/edit/2 => edit name
app.put('./student/edit/:rollNo', (req, res) => {
    let rollNo = req.params.rollNo;
    console.log(rollNo)
    let studentIndex = students.findIndex((student) => student.rollNo === rollNo);
    if (studentIndex >= 0) {
        console.log(studentIndex)
        students[studentIndex].first_name = "Hemant gupta"
        fs.writeFile('students.json', JSON.stringify(students), (err) => {
            if (err) {
                console.log(err)
            } else {
                res.end("<h1>data has been updated.......");
            }
        })
    } else {
        console.log("Student not found at this index")
    }
})

//http://localhost:3000/student/delete
app.delete('./student/delete/:rollNo', (req, res) => {
    let rollNo = students.find((student => student.rollNo === rollNo));
    if (rollNo >= 0) {
        students.splice(rollNo, 1)
        fs.writeFile('students.json', JSON.stringify(students), (err) => {
            if (err) {
                console.log(err)
            } else {
                res.end("<h1> student has been deleted")
            }
        })
    } else {
        res.end("<h1> student not found")
    }
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on port 3000")
    }
})