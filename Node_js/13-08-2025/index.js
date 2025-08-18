const express = require('express')
const connect = require('./connection')
const Student=require('./routes/student')

const app = express();
app.use(express.json())
connect();
app.use(student)
app.get('/', (req, res) => {
    res.end("hello form server...")
})
//http:localhost:3000/student/add
app.post('/student/add',async(req,res)=>{
    console.log(req.body,'req.body');
    let student = new Student(req.body);
    await student.save();
    res.end('data has been saved successfully....')
})
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on port 3000")
    }
})