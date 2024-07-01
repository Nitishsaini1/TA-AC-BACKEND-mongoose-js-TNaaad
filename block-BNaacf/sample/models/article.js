var mongoose = require('mongoose')
var Schema = mongoose.schema;

var userSchema = new Schema({
    name:String,
      age:Number,
      sports:[string],
      marks:[Number]
});

var fieldSchema = new Schema({
    village :String,
 city:   String,
 stat:    String,
 pin :   Number,
 user: Schema.Types.objectId
})