require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

//COMMANDS

const fs = require('fs');
const path = require('path');

const endpointsPath = './endpoints';

var endpoints = {};

fs.readdir(endpointsPath, (err, files) => {
    if(err){
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file, index) => {
      var fullPath = endpointsPath + "/" + file;
      var endpointName = file.split('.').slice(0, -1).join('.');

      console.log(`Initialized endpoint: ${endpointName}`);

      endpoints[endpointName] = require(fullPath);
    });
    
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');

  }

  if(msg.content === 'test_map') {
    const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');

    msg.channel.send(attachment);
  }

  if(msg.content.startsWith('vatan ')) {
      console.log('received command: ' + msg.content);
      const msgContent = msg.content.split(' ');
      const deltaContent = msgContent.slice(2);

      const command = msgContent[1];
      if(command in endpoints) {
          endpoints[command](Discord, msg, deltaContent);
      }
  }
  

  
});