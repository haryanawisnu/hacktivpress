var app = require('express')
var router = app.Router();
var article = require('../controllers/article')

router.get("/", article.showAll);
router.get("/:query", article.showWithQuery);
router.post("/", article.create);
router.delete("/:idarticle/:iduser", article.delete);
router.put("/:idarticle/:iduser", article.update);

module.exports = router
