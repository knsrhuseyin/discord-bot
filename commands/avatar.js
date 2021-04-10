const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let waiting = await message.channel.send("Je cherche...").catch(console.error);
 
    let mentionedUser = message.mentions.users.first() || message.author;
 
    let avatarembed = new Discord.MessageEmbed()
 
        .setImage(mentionedUser.displayAvatarURL())
        .setColor("RANDOM")
        .setTitle("L'avatar de " + message.author.username)
        .setFooter("Demandé par " + message.author.tag)
        .setDescription("[Lien de l'avatar](" + mentionedUser.displayAvatarURL() + ")");

        waiting.delete().catch(console.error);
        message.channel.send(avatarembed).catch(console.error);
}
 
module.exports.help = {
    name: "avatar"
}