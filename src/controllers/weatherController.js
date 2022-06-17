let axios = require("axios")

let getWeatherOfLondon = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid

        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let output = await axios(options);
        res.status(200).send({ data: output.data })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
let getTempOfLondon = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid


        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let output = await axios(options);
        res.status(200).send({ data: { city: city, temp: output.data.main.temp } })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
let getSpecifiedCityData = async function (req, res) {
    try {
        let arr = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr1 = []
        for (let i = 0; i < arr.length; i++) {
            let city = arr[i]
            let appid = req.query.appid


            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
            }
            let output = await axios(options);
            let myNew = { city: city, temp: output.data.main.temp }
            arr1.push(myNew)

        }

        //    res.status(400).send({data:{city:city, temp:output.data.main.temp}})
        let ans=arr1.sort((a,b)=> a.temp - b.temp)
        res.status(200).send({ data: ans })


    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
// abhi sort krna hai ise

module.exports = {
    getWeatherOfLondon,
    getTempOfLondon,
    getSpecifiedCityData
}