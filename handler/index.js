const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    console.log("= | = | = | COMMANDS | = | = | =")
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];
        if (file.name) {
            try{
                
                const properties = { directory, ...file };
                client.commands.set(file.name, properties);
                
                console.log(`${file.name} : ✅`);
            }
            catch(error) {
                console.log(`${file.name} : ❌ | ${error}`)
            }
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    console.log("= | = | = | SLASH COMMANDS | = | = | =")

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        try{
            client.slashCommands.set(file.name, file);

            if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
            arrayOfSlashCommands.push(file);

            console.log(`${file.name} : ✅`);
        }
        catch(error){
            console.log(`${file.name} : ❌ | ${error}`)
        }
        
    });
    client.on("ready", async () => {
        await client.application.commands.set(arrayOfSlashCommands);
    });


};