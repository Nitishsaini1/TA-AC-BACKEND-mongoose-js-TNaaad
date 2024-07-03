var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name :{type:'String', require:true},
    email:{type:'String', lowercase:true, match:/@/},
    sports:{type:'String'}
})

var User = mongoose.model('User',userSchema );

module.exports= User;
