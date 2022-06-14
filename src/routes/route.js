const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const authMiddle = require('../middleware/auth')


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authMiddle.auth, authMiddle.auth2, userController.getUserData)

router.put("/users/:userId", authMiddle.auth, authMiddle.auth2, userController.updateUser)

router.delete("/delete/:userId", authMiddle.auth, authMiddle.auth2, userController.deleteUser)

module.exports = router;