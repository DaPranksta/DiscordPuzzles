const Discord = require('discord.js');
const client = new Discord.Client();

let channels = {}

client.once('ready', () => {
	console.log('Ready!');
	client.channels.cache.get('712331728949084252').send('hello')
});

client.login(process.env.TOKEN);