const Discord = require('discord.js-commando');

class CoinFlipCommand extends Discord.Command {
    constructor(client) {
    super(client,{
        name:'flip',
        group: 'simple',
        memberName: 'flip',
        description: 'flips a coin'
    });
    }
    async run(message, args) {
        var chance =  math.floor(Mathf.random() *2);
        if(chance == 0) {
            MessageChannel.reply('Your could landed heads.');
        } else {
            message.reply('Your coin landed tails.');
        }
}
}

module.exports = CoinFlipCommand;
client.login(config.token);