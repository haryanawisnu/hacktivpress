const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  description: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  created: Date
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
