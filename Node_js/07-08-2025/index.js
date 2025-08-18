const http = require('http');
const fs=require('fs')
const myServer = http.createServer((req, res) => {
       let date=new Date();
       let myDate=date.toLocaleString();
       let msg="one more request from client at " +myDate + '.\n' ;
       fs.appendFile('log.txt',msg,(err)=>{
        if(err){
            console.log('problem')
        }else{
            res.end("<h1>Your request has been stored on our server");
        }
       })




    // console.log(req.url);
    // console.log("one req received ");
    // res.end("<h1>Hello from Hemant's Server")
});
myServer.listen(3000, (err) => {
    if (err) {
        console.log("there are some problem...")
    } else {
        console.log("Server is running on port 3000...");
    }
})
