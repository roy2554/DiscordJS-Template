const client = require("../index");

// Text Command Handling
client.on("messageCreate", async (message) => {
    // Filter
    if (
        message.author.bot ||
        !message.guild
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd);

    // If it is not a command
    if (!command) return;

    // Checking Command require permission
    if (command.permission === "ADMINISTRATOR"){
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You do not have permission");
    }
    await command.run(client, message, args);
});