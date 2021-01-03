const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

client.once('ready' , () =>  {
    console.log('NEON SYSTEM is online');
});

client.on('message', message => {

    message.member.roles.cache.has
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('write this commands with the prefix +:help/ban/kick/youtube');
    } else if(command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UClMNGOv9c1l9U5IiSwDcGwA');
    }
});

client.login('NzkzMTI2ODkwMzU3MTI5MjI2.X-nu-g.Ermo9J3agr0D5RFvAEeOMvHka7s')
