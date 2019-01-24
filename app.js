const Discord = require('discord.js');
const client =  new Discord.Client();
const config = require("./config.json")

client.on('ready', (message) => {
  console.log('I am ready!');
  const attachment = new MessageAttachment('https://78.media.tumblr.com/ea94fa4a4f00974405895b6a9fcefb32/tumblr_inline_o1l3e0IpPd1sck31p_500.gif');
  // This event triggers when the bot joins a guild.
  message.channel.send(attachment);
});

  client.on("message", async message => {
  console.log(message + ' - heard');
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(config.prefix) !== 0) return;
    //split message into array
  const args = message.content.slice(config.prefix.length).trim().split(/ !/g);
  const command = args[0].toLowerCase();
  const name = args[1];

  if(command=="roast") {
    message.channel.send(`${name} is a bitch`);
  }
  });

client.login(config.token);