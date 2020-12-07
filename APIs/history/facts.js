const fetch = require('node-fetch')
const facts = async () => {
    const url = `http://numbersapi.com/#random/year`


    const response = await fetch(url)
    const body = await response.json()

    return body

}


module.exports = facts