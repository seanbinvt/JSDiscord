const Commando = require('discord.js-commando');

class ExecuteCommand extends Commando.Command {
    constructor(client) {
    super(client,{
        name: 'execute',
        group: 'simple',
        memberName: 'execute',
        description: "Execute Order 66"
    });
    }
    async run(message, args) {
        message.channel.send({file: "https://78.media.tumblr.com/ea94fa4a4f00974405895b6a9fcefb32/tumblr_inline_o1l3e0IpPd1sck31p_500.gif"})
}
}

module.exports = ExecuteCommand;