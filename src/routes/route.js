const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require('../controllers/publisherController');
const bookModel = require('../models/bookModel');




router.post('/createAuthor',authorController.createAuthor);

router.post('/createPublisher',publisherController.createPublisher);

router.post('/createBook',bookController.createBook);
router.get('/getBooks',bookController.getBooks);

router.put('/isHardCover/:id',bookController.isHardCover1);
router.put('/inhighRating/:bookName',bookController.increaseRating);


module.exports = router;