const express = require('express')
const BookController = require('../controllers/bookController');
const router = express.Router();
//http:localhost:3000/add/book

router.post('/add/book', (req, res) => {
    BookController.addBook(req, res);
})

//http:localhost:3000/book => access all the book
router.get('/books',(req,res)=>{
    BookController.getBooks(req,res);
})
//http:localhost:3000/book/1234
router.get('/book/:bookId',(req,res)=>{
    BookController.getBook(req,res);
})

router.put('/book/edit/:bookId',(req,res)=>{
    BookController.updateBook(req,res);
})
module.exports = router;
