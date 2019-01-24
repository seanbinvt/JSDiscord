const Discord = require('discord.js');
const client =  new Discord.Client();
const TOKEN = 'MzMyMDI4MzEwMTEwNDcwMTQ0.DyqDaQ.rSFounTJejiuuGq2xiMaVu1BFnY';
const Enmap = require("enmap");
const config = require("./config.json");


bot.on('message', function(message) {
  if(message.content.toUpperCase() == 'FUCK <@201905314516172800>') {
    message.reply('Fuck off');
  }
  if(message.content.toUpperCase() == '!roast @sean') {
    message.channel.send(`${message.mentions.users.first().id} is a bitch`);
  }
});

bot.login(TOKEN);