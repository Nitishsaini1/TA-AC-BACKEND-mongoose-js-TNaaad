var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:{type:String},
    email:{type:String, lowercase:true},
    age:{type:Number, default:0},
    password:{type:Number, minlength:5},
    createdAt:{type:Date, default:Date.now},
    favourites:[{
         type:String
        }],
},{timestamps:true})

const User = mongoose.model('User', userSchema);

module.exports = User;
