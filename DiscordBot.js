const Discord = require('discord.js');
const censorCheck = require('./wordFilter/censorCheck.js');
const config = require('./config.json');
const fs = require('fs');

const DiscordBot = new Discord.Client();
DiscordBot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  DiscordBot.commands.set(command.name, command);
}

DiscordBot.login(config.token);

DiscordBot.on('ready', () =>{
  console.log('Bot is ready.');
});

DiscordBot.on('message', message =>{
  censorCheck(message);

  if(!message.content.startsWith(config.startCommand) || message.author.bot) return;

  const args = message.content.slice(config.startCommand.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'help') {
    DiscordBot.commands.get('help').execute(message, args);
  }
  if(command === 'censoradd') {
    DiscordBot.commands.get('censorAdd').execute(message, args);
  }
  if(command === 'censorremove') {
    DiscordBot.commands.get('censorRemove').execute(message, args);
  }
  if(command === 'censorremoveall') {
    DiscordBot.commands.get('censorRemoveAll').execute(message, args);
  }
  if(command === 'censorlist') {
    DiscordBot.commands.get('censorList').execute(message, args);
  }
});
