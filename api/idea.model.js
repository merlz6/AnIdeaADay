const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Idea = new Schema({
  idea_name: {
    type: String
  },
  idea_description: {
    type: String
  },
  idea_dateCreated: {
    type: String
  }
},{
    collection: 'ideas'
});

module.exports = mongoose.model('Idea', Idea);
