const request = require('request')

const geocode = (address, callback) =>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5kcmUxMjNxIiwiYSI6ImNrZnlxMTRybTA1MjMyeW9iOG5pZGxjaWkifQ.eSiVFf4eDHzYOL92lG7K1A&limit=1`

    request({url: url, json: true}, (error, {body}) => {
        if(error){
                callback('unable to connect to the server', undefined)
        }
        else if(body.features.length === 0){
               callback("there was no location found", undefined)
        }
        else{
            callback(undefined, {name: body.features[0].place_name, longitude: body.features[0].center[0], latitude: body.features[0].center[1]})   
        }

    })

}


module.exports = geocode