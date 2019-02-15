const express = require('express');
const ideaRoutes = express.Router();

// Require the model
let Idea = require('./idea.model');

// add route 
ideaRoutes.route('/add').post(function (req, res) {
  let idea = new Idea(req.body);
  idea.save()
    .then(idea => {
      res.status(200).json({'idea': 'idea has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

//  get idea data
ideaRoutes.route('/').get(function (req, res) {
    Idea.find(function(err, ideas){
    if(err){
      console.log(err);
    }
    else {
      res.json(ideas);
    }
  });
});

//  edit route
ideaRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Idea.findById(id, function (err, idea){
      res.json(idea);
  });
});

//   update route
ideaRoutes.route('/update/:id').post(function (req, res) {
    Idea.findById(req.params.id, function(err, idea) {
    if (!idea)
      res.status(404).send("data is not found");
    else {
        idea.idea_name = req.body.idea_name;
        idea.idea_description = req.body.idea_description;
        idea.idea_dateCreated = req.body.idea_dateCreated;

        idea.save().then(idea => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

//  delete route
ideaRoutes.route('/delete/:id').get(function (req, res) {
    Idea.findByIdAndRemove({_id: req.params.id}, function(err, idea){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ideaRoutes;
