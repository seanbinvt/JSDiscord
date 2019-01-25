const Commando = require('discord.js-commando');

class KysCommand extends Commando.Command {
    constructor(client) {
    super(client,{
        name: 'kys',
        group: 'simple',
        memberName: 'kys',
        description: "Tells bot to say whatever the user said then deleting the user's message"
    });
    }
    async run(message, args) {
      message.channel.send("Badman is a dirty wanker and should kys")
}
}

module.exports = KysCommand;