const forecast = require("./weather/forecast")
const geocode = require("./weather/geocode")
const getBitcoin = require("./Bitcoin/coindesk")
const getChuckNorris = require("./chuck_norris/chucknorris")
const getHistory = require("./history/facts")
const getDog = require("./Dog/randomdog")
const getBored = require("./bored/boredactivity")


const getWeather = async (address) => {

    const coordinates = await geocode(address)

    const weather = await forecast(coordinates.longitude,coordinates.latitude)

    return weather

}


module.exports = {getWeather, getBitcoin, getChuckNorris, getHistory, getDog, getBored}