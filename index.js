const Eris = require("eris");
const bot = new Eris(process.env.TOKEN)

bot.on("ready", () => { 
  console.log("Ready!");
  
  bot.editStatus("online", {name: "Logo Design", type: 1, url: "https://twitch.tv/discord"});
})

bot.connect();

const keepAlive = require('./server');
keepAlive();
// Login the bot
client.login("process.env.TOKEN")
