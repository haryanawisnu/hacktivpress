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
    let list = [];
    let query = "",
      value = req.params.value;
    Article.find().populate('author').exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (req.params.query == "title") {
          query = "title";
        } else if (req.params.query == "category") {
          query = "category";
        } else if (req.params.query == "author") {
          query = "authr._id";
        }
        result.forEach(data => {
          if (data[query] == value) {
            list.push(data);
          }
        })
        console.log(query + "&" + value);
        res.send(list);
      }
    });
  },
  update: (req, res, next) => {
    let idarticle = req.params.idarticle;
    let iduser = req.params.iduser;
    Article.findOne({
      _id: idarticle
    }).populate('author').exec(function(err, result) {
      if (result) {
        if (result.author._id == iduser) {
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
              res.send({
                err: false,
                message: "Success Update",
                data: result
              });
            } else {
              res.send({
                err: true,
                message: "Err Update : " + err,
                data: null
              });
            }
          });
        } else {
          res.send({
            err: true,
            message: "Anda bukan author article ini",
            data: null
          });
        }
      } else {
        res.send({
          err: true,
          message: "Article not found",
          data: null
        });
      }
    });
  },
  create: (req, res, next) => {
    if (req.params.status == 'true') {
      Article.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        author: req.body.author,
        created: new Date
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
    let idarticle = req.params.idarticle;
    let iduser = req.params.iduser;
    Article.findOne({
      _id: idarticle
    }).populate('author').exec((err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result.author._id == iduser) {
          Article.findByIdAndRemove(idarticle, (err, artic) => {
            if (err) {
              res.send({
                err: true,
                message: "ERR Delete : " + err,
                data: null
              });
            } else {
              res.send({
                err: false,
                message: "Success Delete",
                data: artic
              });
            }
          });
        } else {
          res.send({
            err: true,
            message: "Anda bukan author article ini",
            data: null
          });
        }
      }
    });

  }
}

module.exports = articleControllers;
