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

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};
//Comment
bot.login(TOKEN);