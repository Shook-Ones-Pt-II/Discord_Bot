const request = require('request')

const forecast = (longitude, lattitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=30fbb72c1c8e214644ad22468d539ad5&query=${lattitude},${longitude}&units=m`
    request({url: url, json: true}, (error, {body}) =>{
        if(error){
            callback("there was an issue connecting to the server", undefined)
        }
        else if(body.error){
            callback('there was an issue with the request', undefined)
        }
        else{
            
            callback(undefined, {temp: body.current.temperature, precip: body.current.precip})
        }
    })
}

module.exports = forecast