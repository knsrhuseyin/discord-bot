const Discord = require("discord.js")
const os = require('os')
const bot = new Discord.Client()
 
 
module.exports.run = async (bot, message, args) => {
 
    let { version } = require("discord.js");
    let inline = false

        let embedStats = new Discord.MessageEmbed()
            .setTitle("__**Informations du bot**__")
            .setColor("RANDOM")
            .addField("Créateur du bot :", "knsrhuseyin#2006")
            .addField("RAM Utilisée ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, inline)
            .addField("En ligne depuis ⏲", (Math.round(bot.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " min, et " + (Math.round(bot.uptime / 1000) % 60) + " sec", false)
            .addField("Serveurs   ", `${bot.guilds.cache.size}`, inline)
            .addField("Discord.js ", `v${version}`, inline)
            .addField("Node ", `${process.version}`, inline)
            .addField("CPU ", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("Architecture", `\`${os.arch()}\``, inline)
            .addField("Platforme", `\`\`${os.platform()}\`\``, inline)
            .addField("Language de Dev du bot :", "Javascript")
            .setFooter(bot.user.username)

        message.channel.send(embedStats)
    }
 
 
module.exports.help = {
    name: "botinfo"
}
