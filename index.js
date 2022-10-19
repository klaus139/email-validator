const emailValidator = require('email-validator');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/emailvalidate', (req, res) => {
    var email = req.query.email;
    let count = 0;
    if(emailValidator.validate(email)){
        res.send('Valid Email')
        count++
    } else {
        res.send('Invalid Email')
    } 


})


app.listen(4000, ()=> {
    console.log('Server is running on port 4000')
})