const Article = require('../models/article');
const User = require('../models/users');

let articleControllers = {
  showAll: function(req, res) {
    Article.find().populate('author').exec((err, users) => {
      if (err) {
        res.send(err);
      } else {
        res.send(users);
      }
    });
  },
  showWithQuery: function(req, res) {
    //_id: req.params.query
    Article.find().exec((err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  },
  update: (req, res, next) => {
    let idarticle = req.params.idarticle;
    let iduser = req.params.iduser;
    Article.findOne({
      _id: idarticle
    }).exec(function(err, result) {
      if (result) {
        Article.update({
          _id: idarticle
        }, {
          $set: {
            title: req.body.title || result.title,
            description: req.body.description || result.description,
            category: req.body.category || result.category,
            description: req.body.description || result.description
          }
        }, function(err, result) {
          if (result) {
            res.send(result);
          } else {
            res.send(err);
          }
        });
      } else {
        res.send(err);
      }
    });
  },
  create: (req, res, next) => {
    if (req.params.status) {
      Article.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        description: req.body.description,
        author: req.body.author,
        created: req.body.created
      }, function(err, result) {
        if (result) {
          res.send({
            err: false,
            message: "Create Success",
            data: result
          });
        } else {
          res.send({
            err: true,
            message: "ERR Create : " + err,
            data: null
          });
        }
      });
    } else {
      res.send({
        err: true,
        message: "Anda harus login terlebih dahulu",
        data: null
      });
    }
  },
  delete: function(req, res) {
    Article.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  }
}

module.exports = articleControllers;
