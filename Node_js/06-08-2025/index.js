const fs = require('fs')
fs.appendFile('info.txt', "india is a good country", (err) => {
    if(err) {
        console.log(err)
    }else{
        console.log("file has been written successfully")
    }
})
fs.readFile('info.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data,"data from file")
    }
})