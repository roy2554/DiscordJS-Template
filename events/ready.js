const client = require("../index");

// Print Bot name when bot is ready
client.on("ready", () =>
    console.log(`${client.user.tag} is Online!`)
);