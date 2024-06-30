var express = require("express");
var logger = require('morgan');
var mongoose = require('mongoose');

//connect to database

// mongoose.connect("mongodb.//localhost/sample",
//   {useNewUrlParser:true, useUnifiedTopology:true},
//   (err)=>{
//     console.log(err?err:"Connected to database");
//   });


async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost/sample');
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
}

connectToDatabase();


  var app = express();
  app.use(logger('dev'));
  app.get ('/', (req,res)=>{
    res.send('Welcome')
  })
  app.get ('/users', (req,res)=>{
    res.send('User Page')
  });
  app.use((req,res,next)=>{
    res.send('Page not found');
  });
  app.listen(3000,()=>{
    console.log("Server is listening on port 3k")
  })