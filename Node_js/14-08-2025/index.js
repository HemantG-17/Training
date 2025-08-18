const express=require('express');
const connect=require('./connection')
const book=require('./routes/book')
const app=express();
app.use(express.json());
connect();
app.use(book);

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on port 3000")
    }
})

//node index.js => server is running....
//http:localhost:3000/add/book
