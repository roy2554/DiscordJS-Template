const { status } = require("./config.json");

module.exports = async (client) => {
    // Commands
    client.once('ready', () => {
        //Booting.Status;
        let i = 0;
        setInterval(() => client.user.setActivity(`${status[i++ % status.length]}`,{ type: "PLAYING" }),3000);
    });
}