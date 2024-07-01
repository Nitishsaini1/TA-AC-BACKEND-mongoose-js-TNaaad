var mongoose = require('mongoose')
var Schema = mongoose.schema;


var fieldSchema = new Schema({
    village :String,
    city:   String,
    stat:    String,
    pin :   Number,
    user: Schema.Types.ObjectId
})