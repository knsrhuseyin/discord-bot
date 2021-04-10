const Discord = require ("discord.js");

const bot = new Discord.Client();
 
module.exports.run = async (bot, message, args) => {
 
    waiting = await message.channel.send("Je cherche...").catch(console.error);
 
    var pingEmbed = new Discord.MessageEmbed()
    .setAuthor("Latence du bot", bot.user.avatarURL)
    .setColor("RANDOM")
    .addField("**🤖 " + bot.user.username + " :**", "> `" + `${waiting.createdTimestamp - message.createdTimestamp}` + "ms`", true)
    .setTimestamp(message.createdAt)
    .setFooter(bot.user.username + " | demandé par @" + message.author.tag, bot.user.avatarURL)
    waiting.delete().catch(console.error);
    message.channel.send(pingEmbed).catch(console.error);
}
module.exports.help = {
  name: "ping"
}