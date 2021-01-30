const fetch = require('node-fetch')
const boredactivity = async () => {
    const url = `https://www.boredapi.com/api/activity`


    const response = await fetch(url)
    const body = await response.json()

    return body

}


module.exports = boredactivity