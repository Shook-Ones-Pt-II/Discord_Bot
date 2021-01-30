const fetch = require('node-fetch')
const randomdog = async () => {
    const url = `https://random.dog/woof.json`


    const response = await fetch(url)
    const body = await response.json()

    return body

}


module.exports = randomdog