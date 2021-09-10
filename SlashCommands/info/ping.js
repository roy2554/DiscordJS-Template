/*
    === COMMAND INFORMATIONS ===
    COMMAND NAME       : 
    COMMAND AUTHOR     : 
    COMMAND PERMISSION : 
    COMMAND TYPE       : 
    DESCRIPTION        : 
*/

const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "check your latency",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};