const Discord = require('discord.js')
require('dotenv').config()
const getDATA = require('./APIs/getDATA')



const bot = new Discord.Client()

const token = process.env.API_KEY // use file io later with token.pass to hide token from git

bot.on('ready', () => {
    console.log('this bot is online')
})

let annoying = false

bot.on('message', async msg => {


    let arr = msg.content.split(" ")
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

    if(arr[0] === "weather"){
        const loc = ""
        for(let i = 1; i < arr.length - 1; i++){
            loc += arr[i]
        }

        //loc = await geocode(loc)
    }

    if(arr.length >= 2){
        if(arr[0].toLowerCase() == "bitcoin" && arr[1].toLowerCase() == "price"){
            try{

                const BitPrice = await getDATA.getBitcoin()
                msg.reply(`${BitPrice.price}$ CAD`)

            }catch(e){
                console.log(e)
                msg.reply("Bitcoin price is unavailable at the moment")
            }
        } 
    }
    if(arr.length >= 2){
        if(arr[0].toLowerCase() == "chuck" && arr[1].toLowerCase() == "norris"){
            try{

                const ChuckJoke = await getDATA.getChuckNorris()
                msg.reply(`${ChuckJoke.value}`)

            }catch(e){
                console.log(e)
                msg.reply("Chuck Norris joke not available :/")
            }
        } 
    }
    if(msg.content === "history"){
        try{
            const historyFact = await getDATA.getHistory()
            msg.reply(`${historyFact}`)
        }catch(e){
            console.log(e)
            msg.reply("Looks like history was cleared from existence. Naughty naughty...")
        }

    }
    

    if(msg.content == "on" && msg.author.username == "iggy"){
        annoying = true
    }
    if(msg.content == "off" && msg.author.username == "iggy"){
        annoying = false
    }



    if(msg.author.username == "bishcona" && annoying){
        msg.reply("shut yoo a#! up dawg!")
    }
     
    
})


bot.login(token)

