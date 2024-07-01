var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(logger('dev'));

var app = express();

app.get((req,res)=>{
    res.send("welcome")
});

app.listen(3000,()=>{
    console.log("server is listening on port 3k")
});
