const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")
const AuthorController = require('../controllers/authorController')




router.post('/createAuthor', AuthorController.createAuthor)
router.post('/createBook', BookController.createBook)

router.get('/getList', BookController.getList)
router.get('/getUpdatedData',BookController.getUpdatedData)
router.get('/getByCostBooks',BookController.getByCostBooks)


// =============new API Creation 

router.get('/authoridBooks/:id',BookController.authoridBooks)

router.get('/oldAuthorBooks',BookController.oldAuthorBooks)


module.exports = router;