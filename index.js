const { Client, RichEmbed } = require('discord.js')
const dotenv = require('dotenv')

const kickCommand = require('./commands/kick')

dotenv.config()

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as client ${client.user.tag}`)
})

client.on('guildMemberAdd', (member) => {
  member.send('Welcome to the server! We have cake!')
})

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong! 😀')
  }
})

client.on('message', (message) => {
  if (message.content === 'how to embed') {
    const embed = new RichEmbed()
      .setTitle('A slick little embed')
      .setColor(0xFF0000)
      .setDescription('Hello, this is a slick embed!')
    message.channel.send(embed)
  }
})

client.on('message', kickCommand)

client.login(process.env.DISCORD_TOKEN)
