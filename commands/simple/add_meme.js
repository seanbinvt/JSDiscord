const Commando = require('discord.js-commando');
var fs = require('fs');

class AddMemeCommand extends Commando.Command {
    constructor(client) {
        super(client,{
            name:'addmeme',
            group: 'simple',
            memberName: 'addmeme',
            description: "Add random video to memelist.",
        });
        }
        async run(message, args) {
            var input = args;
            while(input.charAt(0) === ' '){
             input = input.substr(1);
            }
            var vidArray = fs.readFileSync(__dirname + '/memes.txt', 'utf-8').split('\n');
            var con = true;
            for(var i = 0; i <= vidArray.length; i++) {
                if(input === vidArray[i]) {
                    message.reply("Sorry, this video is already added.");
                    con = false;
                    break;
                }
            }
            if (con == true) {
                fs.appendFileSync(__dirname + '/memes.txt', '\n' + input, 'utf-8');
            }
        
}
}

module.exports = AddMemeCommand;