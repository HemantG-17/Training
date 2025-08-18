const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const timeStamps = require('mongoose-timestamps');
const bookSchema = new Schema({

    "bookId": { type: Number, required: true },
    "bookName": { type: String, required: true },
    "isbnNo": { type: String, required: true },
    "authorName": { type: String, required: true },
    "price": { type: Number, required: true },
    createdAt: Date,
    updatedAt: Date
})
bookSchema.plugin(timeStamps, { index: true })
module.exports = mongoose.model('Book', bookSchema);