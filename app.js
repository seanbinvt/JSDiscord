const Commando = require('discord.js-commando');
const bot =  new Commando.Client();
const config = require("./config.json")
const prefix = "!";

bot.registry.registerGroup('simple', 'Simple');
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

  bot.on("message", function(message) {
    /*
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    //split message into array


  else if(message.content.startsWith(prefix + "roast")) {
    message.reply ('bling bling lookin ass boy');
  }

  else if(message.content.startsWith(prefix + "execute")) {
    message.channel.send({file: "https://78.media.tumblr.com/ea94fa4a4f00974405895b6a9fcefb32/tumblr_inline_o1l3e0IpPd1sck31p_500.gif"})
  }

  else if(message.content.startsWith(prefix +"voice")) {

    if(message.member.voiceChannel) {
      if(message.guild.voiceConnection) {
          message.member.voiceChannel.join()
              .then(connection => {
                  message.reply("I joined bitch");
              })
      }

      else if(message.content.startsWith(prefix +"ae")) {
        app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;

  } else {
      message.reply("Go in a voice channel then");
  }        
}
}
/*
  else if(message.author.id.toString() == "201905314516172800") {
    message.channel.send("Goblin is a bitch.");
  }

else {
  const comWords = ["canada", "canadian", "commie", "communist"];
  for(var i=0; i < comWords.length; i++) {
    if(message.content.toString().toLowerCase().includes(comWords[i])) {
      message.channel.send(comWords[i] + "?", {file: "https://www.tldm.org/news2/communist-infiltrators.jpg"})
    break;
    }
  }
}
*/
  });

bot.login(config.token);