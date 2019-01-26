const Commando = require('discord.js-commando');

class RngCommand extends Commando.Command {
    constructor(client) {
    super(client,{
        name:'rng',
        group: 'simple',
        memberName: 'rng',
        description: "Gets a random number between one and the given max",
        args: [
            {
                prompt: 'What is the maximum number you wish to appear?',
                type: 'integer',
                validate: text => {
                    if (text.length < 10) return true;
                    return 'pick a smaller number you dyke';
                }
            }
        ]
    });
    }
    async run(message, args) {
        message.reply(Math.round(args * Math.random()));    
}
}

module.exports = RngCommand;