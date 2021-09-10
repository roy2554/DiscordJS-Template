/*
    === COMMAND INFORMATIONS ===
    COMMAND NAME       : 
    COMMAND AUTHOR     : 
    COMMAND PERMISSION : 
    COMMAND TYPE       : 
    DESCRIPTION        : 
*/

const { Message } = require("discord.js");

module.exports = {
    name : "ping",
    description : "ping pong",
    ailias: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send("pong!");
    },
};