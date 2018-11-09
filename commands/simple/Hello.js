const Discord = require("discord.js-commando");


class HelloCommand extends Discord.Command{
    constructor(client){
        super(client,{
            name: "hello",
            group: "simple",
            memberName: "hello",
            description: "You greet Senpai",
        });
    }
    async run(msg){
        var vastaukset = [
            "Konnichiwa " + msg.author + "-san.",
            "...",
            "I don't want to speak with you, baka."
        ]
        var vastaus = vastaukset[Math.floor(Math.random() * vastaukset.length)];
        msg.channel.send(vastaus);
    }
}

module.exports = HelloCommand;