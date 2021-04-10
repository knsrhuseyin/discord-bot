const Discord = require("discord.js");
const bot = new Discord.Client();
 
module.exports.run = async (bot, message, args) => {
 
    let inline = true
    let servericon = message.guild.iconURL()
    let serverembed = new Discord.MessageEmbed()
        .setColor("cyan")
        .setThumbnail(servericon)
        .setAuthor(message.guild.name)
        .addField("Nom", message.guild.name, inline)
        .addField("ID :id:", message.guild.id, inline)
        .addField("Owner :crown:", message.guild.owner, inline)
        .addField("Région", message.guild.region, inline)
        .addField("Nombre de membres",  `${message.guild.memberCount}`, inline)
        .addField("Roles", message.guild.roles.cache.size, inline)
        .addField("Salons", message.guild.channels.cache.size)        
        .addField("Serveur rejoint le :", message.member.joinedAt)
        .setFooter(`Créé le ${message.guild.createdAt}`);
 
    message.channel.send(serverembed);
    console.log(servericon);
 
}
 
module.exports.help = {
    name: "serverinfo"
}
