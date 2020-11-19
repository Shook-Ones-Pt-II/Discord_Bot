const fetch = require('node-fetch')
const coindesk = async () => {
    const url = `https://api.coindesk.com/v1/bpi/currentprice.json`
    const url2 = 'https://api.exchangeratesapi.io/latest?base=USD'

    const response = await fetch(url)
    const body = await response.json()
    const response2 = await fetch(url2)
    const body2 = await response2.json()

    const data = {price: ((body.bpi.USD.rate_float) * (body2.rates.CAD)).toFixed(2)}

    return data

}


module.exports = coindesk