require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.find(
        c => c.name === '🛬┃arrivals'
    );

    if (!channel) return;

    const memberCount = member.guild.memberCount;
    const serverName = member.guild.name;

    channel.send(
        `👋 Welcome <@${member.id}> to **${serverName}** from your flight from Afghanistan! You're the **${memberCount}th** member! 🎉`
    );
});

client.login(process.env.TOKEN);