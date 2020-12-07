const fetch = require('node-fetch')
const chucknorris = async () => {
    const url = `https://api.chucknorris.io/jokes/random`


    const response = await fetch(url)
    const body = await response.json()

    return body

}


module.exports = chucknorris