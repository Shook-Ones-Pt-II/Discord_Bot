const Discord = require('discord.js')
require('dotenv').config()
const express = require('express')

const app = express()

const bot = new Discord.Client()

const token = process.env.API_KEY // use file io later with token.pass to hide token from git

bot.on('ready', () => {
    console.log('this bot is online')
})

bot.on('message', async (msg) => {
    //hello world equivalent of discord bot
    const arr = msg.content.split()

    if(msg.content === "HELLO"){
        msg.reply("hello stoooopid beeep booop bop \n this messge comes from the organization")
        
    }

    if(arr[0] === "weather"){
        const loc = ""
        for(let i = 1; i < arr.length - 1; i++){
            loc += arr[i]
        }

        //loc = await geocode(loc)
    }

    
    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

bot.login(token)

