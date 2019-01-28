const Commando = require('discord.js-commando');
var fs = require('fs');

class MemeCommand extends Commando.Command {
  
    constructor(client) {
    super(client,{
        name:'meme',
        group: 'simple',
        memberName: 'meme',
        description: "Get random video meme.",
    });
    }
    async run(message) {
      var vidArray = fs.readFileSync(__dirname + '/memes.txt', 'utf-8').split('\n');
      const picked = Math.floor(Math.random() * vidArray.length);
      message.reply(vidArray[picked]);
}
}

module.exports = MemeCommand;