var mongoose = require('mongoose')
var Schema = mongoose.schema;

var userSchema = new Schema({
      name:String,
      
      email:{type:string, lowercase:true},
      age:{type:Number, default:0},
      favorites:[string],
      marks:[Number]
});
