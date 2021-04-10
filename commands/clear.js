const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
    message.delete().catch(console.error);
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission");
    if (!args[0]) return message.channel.send("Indique le nombre de messages que tu souhaite supprimer !");
    message.channel.bulkDelete(args[0]).then(() => {
        if(args[0] = 1) {
            message.channel.send(`un message a bien été supprimé`).then(msg => msg.delete({ timeout: 2500 })).catch(console.error);
        } else {
            message.channel.send(`${args[0]} messages ont bien été supprimés`).then(msg => msg.delete({ timeout: 2500 })).catch(console.error);
        }
        
    });
}
 
module.exports.help = {
    name: "clear"
}