
var mongoose = require('mongoose')
var Schema = mongoose.schema;

  const articleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  });
  
  const Article = mongoose.model('Article', articleSchema);
  
  module.exports = Article;
  
  
  