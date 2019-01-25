const Commando = require('discord.js-commando');
const fs = require("fs");
var content; 

class ManCommands extends Commando.Command {
    constructor(client) {
    super(client,{
        name: 'manual',
        group: 'simple',
        memberName: 'manual',
        description: "Manual of command"
    });
    }
    async run(message) {
        fs.readFile('./Manual.txt', function (err,data) {
            if (err) {
              return console.log(err);
            } else {
              console.log(data);
              message.channel.send(data.toString());
            }
          });
}
}

module.exports = ManCommands;