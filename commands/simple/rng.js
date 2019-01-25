const Commando = require('discord.js-commando');

class RngCommand extends Commando.Command {
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

module.exports = RngCommand;