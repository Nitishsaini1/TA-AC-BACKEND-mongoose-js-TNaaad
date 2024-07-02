
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
  village: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pin: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
