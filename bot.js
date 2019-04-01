const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("482646017452277760")
setInterval(function() {
channel.send(`يا  التهكير هاهاهاها`);
}, 30)
})

client.login(process.env.BOT_TOKEN);