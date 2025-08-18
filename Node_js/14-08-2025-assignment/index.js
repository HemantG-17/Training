const express=require('express');
const connect=require('./connection')
const event=require('./routes/Event')
const app= express();
app.use(express.json());
connect();
app.use(event);


app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running on port 3000........")
    }
})

