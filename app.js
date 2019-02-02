const Commando = require('discord.js-commando');
const bot =  new Commando.Client();
const config = require("./config.json")
const prefix = "!";

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