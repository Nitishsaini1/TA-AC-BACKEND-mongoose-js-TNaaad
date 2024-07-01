var mongoose = require('mongoose')
var schema = mongoose.Schema;

var user = new Schema({
    name : String,
    age: Number
})