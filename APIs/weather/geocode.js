
const fetch = require('node-fetch')

const geocode = async (address) =>{



    try{const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5kcmUxMjNxIiwiYSI6ImNrZnlxMTRybTA1MjMyeW9iOG5pZGxjaWkifQ.eSiVFf4eDHzYOL92lG7K1A&limit=1`

    const response = await fetch(url)

    const body = await response.json()
    const data = {name: body.features[0].place_name, longitude: body.features[0].center[0], latitude: body.features[0].center[1]}
    return data}catch(error){
        console.log(error)
    }

    //Uprgraded depricated request API to new supported node-fetch API
}


module.exports = geocode