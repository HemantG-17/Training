const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mernTraining2025');
        console.log("connected successfully....")
    } catch (err) {
        console.log(err)
    }
}