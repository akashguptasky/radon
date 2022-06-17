const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherController")
const MeemsController = require("../controllers/meemsController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)



router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getDist", CowinController.getDistById)

// Here London Weather  API
router.get("/weather/london", WeatherController.getWeatherOfLondon)
router.get("/temp/london", WeatherController.getTempOfLondon)
router.get("/data/allcity", WeatherController.getSpecifiedCityData)

// here Memes 
router.get("/getAllMeems", MeemsController.getMemes)
router.post("/editMemes", MeemsController.editMemes)


module.exports = router;