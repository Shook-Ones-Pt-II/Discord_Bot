const Discord = require('discord.js')
require('dotenv').config()
const getDATA = require('./APIs/getDATA')



const bot = new Discord.Client()

const token = process.env.API_KEY // use file io later with token.pass to hide token from git

bot.on('ready', () => {
    console.log('this bot is online')
})

bot.on('message', async msg => {
    if(msg.content === "HELLO"){
        msg.reply("hello stoooopid beeep booop bop \n this messge comes from the organization")
    }

    if(msg.content.split(" ")[0].toLowerCase() === "weather" && msg.content.split(" ").length > 1){
        let address = ""

        for(let i = 1; i < msg.content.split(" ").length; i++){
            address += msg.content.split(" ")[i]
        }

        try{
            const weatherData = await getDATA.getWeather(address)
            msg.reply(`The temperature is ${weatherData.temp}°C and there is a ${weatherData.precip * 100}% chance of precipitation`)
        }catch(e){
            msg.reply("did not find location")
        }
    }
    
})


bot.login(token)

