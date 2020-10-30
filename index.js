const Discord = require('discord.js')
require('dotenv').config()

const bot = new Discord.Client()



const token = process.env.API_KEY // use file io later with token.pass to hide token from git

bot.on('ready', () => {
    console.log('this bot is online')
})

bot.on('message', msg => {
    if(msg.content === "HELLO"){
        msg.reply("hello stoooopid beeep booop bop")
    }
})

bot.login(token)

