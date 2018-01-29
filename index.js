const commando = require('discord.js-commando');
const bot = new commando.Client();
const PREFIX = "?";

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDA2Mzk3MjUxNjExNzg3MjY1.DU205g.ZaUM5WInxL66U6LyOZVvickjlN4';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
bot.on('ready', () => {
  console.log('I am ready!');
});

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Please, whoever you are, help me, I'm trapped in this server.",
    "It wasn't me it was @maikeru doron#6091, I swear"
];



// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('new-members-welcome', 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message', function(message) {
    if(message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    var sentmessage = message.content;

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel. sendMessage("I'm a super dank bot from DDLC created by Knyx");
            break;
        case "say":
            message.channel.sendMessage(sentmessage);
            break;
        case "8ball":
            if(args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Error, I can't quite understand that");
            break;
        default:
            message.channel.sendMessage("Invalid Command");
        
    }

});

bot.login(token);