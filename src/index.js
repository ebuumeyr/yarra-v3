require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log('The bot is ready');

    client.user.setActivity({
        name: "Cunny",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=YZ3OFM771F4&feature=youtu.be',
    });
});


client.on('messageCreate', (message) => {
    if (message.content === 'Mrtcn') {
        message.reply('Satışcan mı doğru')
    }
    
    if (message.content === '🧢') {
        message.reply('Fax')
    }

     if (message.content === 'Cu ne demek') {
        message.reply('Ananın amcu')
    }

     if (message.content === 'Bruh') {
        message.reply('Bruh Moment')
    }

     if (message.content === 'Mrtcn nerdesin aq') {
        message.reply('Cidden gel artık aq')
    }
});



client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

   if (interaction.commandName === 'hey') {
    interaction.reply('hey!');
   }

   if (interaction.commandName === 'malumat') {
    interaction.reply('Mrtcn is a AI algorythm that serves no real purpose')
   }

});

client.login(process.env.TOKEN);