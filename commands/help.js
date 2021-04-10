const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

    let inline = false
    var helpEmbed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username)
    .setColor("GREEN")
    .setTitle("Les commandes : ")
    .addField("+help", "Pour voir les commandes.", inline)
    .addField("+avatar", " Pour voir son avatar (avec le lien).", inline)
    .addField("+clear [nombre] ", "Pour supprimer un ou plusieurs messages.", inline)
    .addField("+ping", "Pour voir les ping du bot.", inline)
    .addField("+serverinfo", "Pour voir les informations sur le serveur.", inline)
    .addField("+botinfo", "Pour voir les statistiques du bot.")
    .setFooter(bot.user.username + " | demandé par @" + message.author.tag, bot.user.avatarURL)
    message.channel.send(helpEmbed).catch(console.error);

}
module.exports.help = {
    name: "help"
}
