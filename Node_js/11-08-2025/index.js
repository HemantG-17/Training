const users = require('./MOCK_DATA.json');
const express = require('express');
const app = express();
const fs = require('fs');
const { findSourceMap } = require('module');
app.use(express.json()); // Middleware to parse JSON bodies
//localhost:3000
app.get('/', (req, res) => {
    console.log('this is get method');
    res.end('Hello World from server');
});
//localhost:3000/users
app.get('/users', (req, res) => {
    console.log('this is get method for users');
    res.json(users);
});
//localhost:3000/users/1
app.get('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find(user => user.id == id);
    if (user) {
        console.log(user);
    } else {
        res.status(404).send('<h1> User not found...');
    }
});
//locallhost:3000/user/find/email/:email
app.get('/user/find/email/:email', (req, res) => {
    let email = req.params.email;
    let user = users.find(user => user.email === email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});
//localhost:3000/user/add
app.post('/user/add', (req, res) => {
    console.log(req.body);

    users.push(req.body);//now this users variable cantain 11 users
    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
        res.end('User added successfully');
    });

    res.end('');

});
//http://localhost:3000/user/edit/10 -> input as parameter
//http://localhost:3000/user/edit?id=10 -> input as a query string
app.put('/user/edit/:id', (req, res) => {
    let id = req.params.id; //if hit from line no. 48
    // let id = req.query.id; //if hit from line no. 49
    console.log(id)
    let userIndex = users.findIndex((user) => user.id === parseInt(id));
    if (userIndex >= 0) {
        users[userIndex].first_name = "shyam kumar"
        fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                console.log(err)
            } else {
                res.end("<h1>data has been updated.......");
            }
        })
    } else {
        console.log("user not found")
    }
})
//http://localhost:3000/user/delete/10
//http://localhost:3000/user/delete?id=10
app.delete('/user/delete/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    let userIndex = users.findIndex((user) => user.id === parseInt(id))
    console.log(userIndex)
    if (userIndex >= 0) {
        users.splice(userIndex, 1)  //it will delete one user from users array
        fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err) => {
            if (err) {
                console.log(err)
            } else {
                res.end('<h1> users has been deleted.......')
            }
        })
    } else {
        res.end('<h1>user not found....')
    }
})
app.listen(3000, (err) => {
    if (err) {
        console.log('Error starting server:', err);

    } else {
        console.log('Server is running on port 3000');
    }
});