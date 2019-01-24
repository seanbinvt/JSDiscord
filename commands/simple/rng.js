    const Discord = require('discord.js-commando');

class AnonCommand extends Discord.Command {
    constructor(client) {
    super(client,{
        name:'rng',
        group: 'simple',
        memberName: 'rng',
        description: "Gets a random number between one and the given max"
    });
    }
    async run(message, args) {
        message.reply(Math.round(args * Math.random()));    
}
}

module.exports = AnonCommand;
client.login(config.token);