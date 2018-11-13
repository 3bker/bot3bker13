const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510802550715449345")
setInterval(function() {
channel.send(`3bker up 3bker up 3bker up 3bker up`);
}, 30)
})

client.login(process.env.BOT_TOKEN);