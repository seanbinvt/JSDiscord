const Commando = require('discord.js-commando');

class AnonCommand extends Commando.Command {
    constructor(client) {
    super(client,{
        name:'anon',
        group: 'simple',
        memberName: 'anon',
        description: "Tells bot to say whatever the user said then deleting the user's message"
    });
    }
    async run(message, args) {
      message.delete();
      message.channel.send(args);
}
}

module.exports = AnonCommand;