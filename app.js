const Commando = require('discord.js-commando');
const bot =  new Commando.Client();
const config = require("./config.json")

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '10.129.61.138';
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('aecommands', 'AeCommands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
        game: {
            name: '!help | Snoz big gay',
            /*
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
            */
        }
    });
});

bot.login(config.token);