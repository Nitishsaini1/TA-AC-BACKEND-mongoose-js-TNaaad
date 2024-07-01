var express = require('express')
var mongoose = require('mongoose')

//connect to database 

    mongoose.connect('mongodb://localhost/sample')
                  .then(() => console.log('Connected to database'));

    var app = express();
    app.get('/', (req,res)=>{
        res.send('Welcome')
    });
    app.listen(3000,()=>{
        console.log('server listening on port 3k')
    });