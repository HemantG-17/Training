const express = require('express')
const connect = require('./connection')
const User = require('./models/User');
const app = express();
app.use(express.json())
connect();

app.get('/', (req, res) => {
    res.end("hello form server...")
})
//http:localhost:3000/user/add

app.post('/user/add',async(req,res)=>{
    console.log(req.body,'req.body');
    let user = new User(req.body);
    await user.save();
    res.end('data has been saved successfully....')
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on port 3000")
    }
})