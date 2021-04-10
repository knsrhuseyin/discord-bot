const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: " Ne pas dérenger",
        offline: " Hors-Ligne/Invisble"
    }
    let mentionedUser = message.mentions.users.first() || message.author;
 
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author
 
    if (member.user.bot === true) {
        bot = "Oui";
    } else {
        bot = "Non";
    }
 
 
    let embed = new Discord.MessageEmbed()
        .setAuthor(member.user.username)
        .setThumbnail((target.displayAvatarURL))
        .setColor("#00ff00")
        .addField("Pseudo :two_women_holding_hands:", `${member.user.tag}`, inline)
        .addField("ID :id:", member.user.id, inline)
        .addField("Bot ", `${bot}`, inline, true)
        .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
        .addField("Joue à 🎮 ", `${member.user.presence.game ? `${member.user.presence.game.name}` : "<:nop:584161031677542402> Ne joue pas"}`, inline, true)
        .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:nop:584161031677542402> N'a pas de roles !"}`, true)
        .setFooter(`Information a propos de ${member.user.username}`)
        .setThumbnail(mentionedUser.displayAvatarURL)
        .setTimestamp()
 
    message.channel.send(embed);
 
    message.delete();
}
 
module.exports.help = {
    name: "userinfo"
}