const express = require('express')
const app = express();
const fs = reqire('fs')

app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on port 3000....")
    }
})