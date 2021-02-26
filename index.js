const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.login('ODAyNDA0Mzg2NDUzODQ4MDY1.YAuvUQ.twAu24RARBi2F6R-w3GWBG_-Wnk');

let prefix = process.env.PREFIX;
client.on("message", (message) => {
  if (!message.guild)
   return;
  if (message.author.bot) return;
  const cont = message.content.split(" ").slice(1);
  const args = cont.join(" ");
  if (message.content === '/marto') {
    // Checking if the message author is in a voice channel.
    if (!message.member.voice.channel)
      return message.reply("You must be in a voice channel.");
    // Checking if the bot is in a voice channel.
    if (message.guild.me.voice.channel)
      return message.reply("I'm already playing.");

    // Joining the channel and creating a VoiceConnection.
    message.member.voice.channel.join().then((VoiceConnection) => {
      // Playing the music, and, on finish, disconnecting the bot.
      VoiceConnection.play("./music/test/gutt.mp3").on("finish", () =>
        VoiceConnection.disconnect()
      );
    });
  }
});