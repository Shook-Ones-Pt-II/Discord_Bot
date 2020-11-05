const fetch = require('node-fetch')

const forecast = async (longitude, latitude) => {
    const url = `http://api.weatherstack.com/current?access_key=30fbb72c1c8e214644ad22468d539ad5&query=${latitude},${longitude}&units=m`

    const response = await fetch(url)
    const body = await response.json()

    const data = {temp: body.current.temperature, precip: body.current.precip}

    return data



//Uprgraded depricated request API to new supported node-fetch API

}


module.exports = forecast