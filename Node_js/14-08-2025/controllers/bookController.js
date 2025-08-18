const Book = require('../models/Book');
async function addBook(req, res) {
    try {
        console.log(req.body, 'req.body');
        let book = new Book(req.body);
        await book.save();
        res.end("<h1> ...........Book Updated Successfully.........")
    } catch (err) {
        console.log(err);
    }
}

async function getBooks(req, res) {
    try {
        let books = await Book.find({});//it will access all the books
        console.log(books)
        res.json(books);
    } catch (err) {
        console.log(err)
    }
}
async function getBook(req, res) {
    try {
        let bookId = req.params.bookId
        let book = await Book.findOne({ bookId: bookId });
        if (book) {
            console.log(book);
            res.json(book);
        } else {
            req.end("Book not found...")
        }
    } catch (err) {
        console.log(err);
    }
}
async function updateBook(req, res) {
    try {
        let bookId = req.params.bookId;
        let book = await Book.findOne({ bookId: bookId });
        if (book) {
            console.log(req.body);
            book.bookName = req.body.bookName;
            book.price = req.body.price;
            await book.save();
            res.end(".....BOOK HAS BEEN UPDATED......");
        } else {
            res.end("Book Not found")
        }
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    addBook,
    getBooks,
    getBook,
    updateBook
}