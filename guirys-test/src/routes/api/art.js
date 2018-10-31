const router = require('express').Router();
const artController = require('../../controllers/artController');

router.route('/')
    .get(booksController.findAll)
    .post(artController.create);

router.route("/:id")
    .put(artController.update)
    .delete(artController.delete);

module.exports = router;