var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var user = require("./models/user");

//connect to database

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

//initiate  the app
var app = express();

//routes
// app.use(express.json())
app.post("/users", (req, res) => {
    const user = new User({ 
      name: req.body.name, 
      email: req.body.email, 
      sports: req.body.sports 
    });
    user.save((err, user) => {
      if (err) return next(err);
      res.send("User created");
    });
  });
  
  
//server listerner
app.listen(3000, () => {
  console.log("Server is listening on port 3k");
});
